import React, { useEffect } from "react";
import { Row, Col, Spin } from "antd";

import { Header, FullCalender, TimeLine, MiniBoard } from "../../components";
import {
  myRecruitmentSlice,
  getMyRecruitment,
} from "../../redux/myRecruitment/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";

import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  const loading = useSelector((state) => state.myRecruitment.loading);
  const error = useSelector((state) => state.myRecruitment.error);
  const myRecruitment = useSelector((state) => state.myRecruitment.data);

  const dispatch = useDispatch();

  useEffect(() => {
    // userIdを渡す
    dispatch(getMyRecruitment(1));
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <Spin size="large">
          <div className={styles["page-content"]}>
            <FullCalender myRecruitment={myRecruitment} />
            <Row style={{ backgroundColor: "white" }}>
              <Col span={12}>
                <TimeLine />
              </Col>
              <Col span={12}>
                <MiniBoard />
              </Col>
            </Row>
          </div>
        </Spin>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        <FullCalender myRecruitment={myRecruitment} />
        <Row style={{ backgroundColor: "white" }}>
          <Col span={12}>
            <TimeLine />
          </Col>
          <Col span={12}>
            <MiniBoard />
          </Col>
        </Row>
      </div>
    </>
  );
};
