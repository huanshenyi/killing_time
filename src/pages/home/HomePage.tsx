import React, { useEffect, useState } from "react";
import { Row, Col, Spin } from "antd";
import { useDispatch } from "react-redux";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";

import { Header, FullCalender, TimeLine, MiniBoard } from "@/components";
import { getMyRecruitment } from "@/redux/myRecruitment/slice";
import { useSelector } from "@/redux/hooks";
import { MainLayout } from "@/layouts";

import styles from "./HomePage.module.css";

interface JwtPayload extends DefaultJwtPayload {
  id: number;
  username: string;
  icon: string;
}

export const HomePage: React.FC = () => {
  const myRecruitment = useSelector((state) => state.myRecruitment.data);
  const loading = useSelector((state) => state.myRecruitment.loading);
  const error = useSelector((state) => state.myRecruitment.error);
  const jwt = useSelector((state) => state.user.token);
  const [userData, setUserData] = useState<JwtPayload>({
    id: 0,
    username: "",
    icon: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayload>(jwt);
      setUserData({
        id: token.id,
        username: token.username,
        icon: token.icon,
      });
      dispatch(getMyRecruitment(token.id));
    }
  }, [jwt]);

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
      <FullCalender myRecruitment={myRecruitment} user_id={userData.id} />
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
