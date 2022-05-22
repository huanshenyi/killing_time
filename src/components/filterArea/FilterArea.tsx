import React from "react";
import { Button, Row, Col } from "antd";
import { RecruitmentType } from "@/models";

import styles from "./FilterArea.module.css";

interface IProps {
  showType: RecruitmentType;
  handelChangeShowType: (type: RecruitmentType) => void;
}

export const FilterArea: React.FC<IProps> = ({
  handelChangeShowType,
  showType,
}) => {
  return (
    <div className={styles["filter-area"]}>
      <Row>
        <Col span={12}>
          <Button
            onClick={() => {
              handelChangeShowType("recruitment");
            }}
            type={showType === "recruitment" ? "primary" : "default"}
            className={styles["filter-botton-area"]}
          >
            募集
          </Button>
        </Col>
        <Col span={12}>
          <Button
            onClick={() => {
              handelChangeShowType("freeTime");
            }}
            type={showType === "freeTime" ? "primary" : "default"}
            className={styles["filter-botton-area"]}
          >
            空き時間
          </Button>
        </Col>
      </Row>
    </div>
  );
};
