import React from "react";
import { Row, Col } from "antd";

import { Header, FullCalender, TimeLine, MiniBoard } from "../../components";

import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        <FullCalender />
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
