import React, { useEffect } from "react";
import { MainLayout } from "@/layouts";
import { Row, Col, Affix, Spin } from "antd";
import { useDispatch } from "react-redux";

import { RecruitmentAndFreeTimeList, FilterArea, SideBox } from "@/components";
import { getRecruitment } from "@/redux/recruitment/slice";
import { useSelector } from "@/redux/hooks";

import styles from "./Board.module.css";

export const Board: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.recruitment.loading);
  const error = useSelector((state) => state.recruitment.error);
  const recruitmentList = useSelector((state) => state.recruitment.data);
  useEffect(() => {
    dispatch(getRecruitment(null));
  }, []);

  if (loading) {
    return (
      <>
        <MainLayout>
          <Spin size="large">
            <div className={styles["board-list-container"]}></div>
          </Spin>
        </MainLayout>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <MainLayout>
        <Row>
          <Col span={16}>
            <div className={styles["board-list-container"]}>
              {/*絞り込み用エリア*/}
              <FilterArea />
              {/*募集と空き時間リスト*/}
              <RecruitmentAndFreeTimeList dataList={recruitmentList} />
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
