import React, { useEffect, useState } from "react";
import { MainLayout } from "@/layouts";
import { Row, Col, Affix, Spin } from "antd";
import { useDispatch } from "react-redux";

import { RecruitmentAndFreeTimeList, FilterArea, SideBox } from "@/components";
import { getRecruitment } from "@/redux/recruitment/slice";
import { getTag } from "@/redux/tag/slice";
import { useSelector } from "@/redux/hooks";
import { RecruitmentType } from "@/models";

import styles from "./Board.module.css";

export const Board: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.recruitment.loading);
  const error = useSelector((state) => state.recruitment.error);
  const recruitmentList = useSelector((state) => state.recruitment.data);

  const tagLoading = useSelector((state) => state.tag.loading);
  const tagError = useSelector((state) => state.tag.error);
  const tagList = useSelector((state) => state.tag.data);

  useEffect(() => {
    dispatch(getRecruitment(null));
    dispatch(getTag({ status: 1, page: 1, limt: 10 }));
  }, []);

  const [showType, setShowType] = useState<RecruitmentType>("recruitment");
  const handelChangeShowType = (type: RecruitmentType) => {
    setShowType(type);
  };

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
              <FilterArea
                showType={showType}
                handelChangeShowType={handelChangeShowType}
              />
              {/*募集と空き時間リスト*/}
              <RecruitmentAndFreeTimeList
                dataList={recruitmentList}
                showType={showType}
              />
            </div>
          </Col>
          <Col span={8}>
            <Affix>
              <div className={styles["board-card-container"]}>
                {/*広告、Hotなどエリア*/}
                {tagLoading ? null : (
                  <SideBox
                    tagError={tagError}
                    tagData={tagList}
                    tagLoading={tagLoading}
                  />
                )}
              </div>
            </Affix>
          </Col>
        </Row>
      </MainLayout>
    </>
  );
};
