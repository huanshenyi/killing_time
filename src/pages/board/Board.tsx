import React from "react";
import { MainLayout } from "@/layouts";
import { Row, Col, Affix } from "antd";

import { RecruitmentAndFreeTimeList, FilterArea, SideBox } from "@/components";

import styles from "./Board.module.css";

export const Board: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Row>
          <Col span={16}>
            <div className={styles["board-list-container"]}>
              {/*絞り込み用エリア*/}
              <FilterArea />
              {/*募集と空き時間リスト*/}
              <RecruitmentAndFreeTimeList data={[]} />
            </div>
          </Col>
          <Col span={8}>
            <Affix>
              <div className={styles["board-card-container"]}>
                {/*広告、Hotなどエリア*/}
                <SideBox />
              </div>
            </Affix>
          </Col>
        </Row>
      </MainLayout>
    </>
  );
};
