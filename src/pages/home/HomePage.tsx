import React, { useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { useDispatch } from "react-redux";

import { Header, FullCalender, TimeLine, MiniBoard } from "@/components";
import { getMyRecruitment } from "@/redux/myRecruitment/slice";
import { useSelector } from "@/redux/hooks";
import { MainLayout } from "@/layouts";

import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  const myRecruitment = useSelector((state) => state.myRecruitment.data);
  const loading = useSelector((state) => state.myRecruitment.loading);
  const error = useSelector((state) => state.myRecruitment.error);

  const dispatch = useDispatch();

  useEffect(() => {
    // userIdを渡す
    dispatch(getMyRecruitment(1));
  }, []);

  if (loading) {
    return (
      <>
        <MainLayout>
          <Spin size="large">
            <div className={styles["page-content"]}></div>
          </Spin>
        </MainLayout>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainLayout>
      <FullCalender myRecruitment={myRecruitment} />
      <Row style={{ backgroundColor: "white" }}>
        <Col span={12}>
          <TimeLine myRecruitment={myRecruitment} />
        </Col>
        <Col span={12}>
          <MiniBoard />
        </Col>
      </Row>
    </MainLayout>
  );
};
