import React from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { Modal, Button, Popover, Row, Col, Statistic, Tag } from "antd";
import {
  DollarCircleOutlined,
  DeleteTwoTone,
  EditTwoTone,
  EnvironmentOutlined,
  UserOutlined,
  ProfileOutlined,
  CalendarOutlined,
  SnippetsTwoTone,
} from "@ant-design/icons";
import { RecruitmentType } from "@/models";
import { recruitmentColor, freeTimeColor, applicationColor } from "@/utils";

import { useDispatch } from "react-redux";
import {
  setRecruitmentItem,
  resetRecruitmentItem,
} from "@/redux/recruitmentItem/slice";

import styles from "./CalendarCellEventModal.module.css";

export interface EventTargetDate {
  id: number;
  title: string;
  place: string;
  fullday: true;
  start: string;
  end: string;
  content: string;
  paid: false;
  paidContent: string;
  numberLimit: number;
  type: RecruitmentType;
  userId: number;
}

interface IProps {
  isModalVisible: boolean;
  eventTargetData: EventTargetDate;
  setIsModalVisible: () => void;
  handelEventDeleteRecruitment: (recruitmentId: number) => void;
  handelShowFixModal: () => void;
}

export const CalendarCellEventModal: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const {
    isModalVisible,
    eventTargetData,
    setIsModalVisible,
    handelEventDeleteRecruitment,
    handelShowFixModal,
  } = props;
  //TODO: fulldayで表示制御する
  const handelDeleteMyRecruitmentItem = (itemID: number) => {
    handelEventDeleteRecruitment(itemID);
    setIsModalVisible();
  };

  const handelFixMyRecruitmentItem = (item: EventTargetDate) => {
    //todo: 開始後の修正は不可能
    // 参加者いれば修正も不可能
    dispatch(resetRecruitmentItem());
    dispatch(setRecruitmentItem(item));
    handelShowFixModal();
  };

  const typeToString = (value: string) => {
    let text = "";
    switch (value) {
      case "recruitment":
        text = "募集";
        break;
      case "freeTime":
        text = "空き時間";
        break;
      case "application":
        text = "応募";
        break;
    }
    return text;
  };

  const typeToColor = (value: string) => {
    switch (value) {
      case "recruitment":
        return recruitmentColor;
      case "freeTime":
        return freeTimeColor;
      case "application":
        return applicationColor;
    }
  };

  return (
    <>
      <Modal
        title={
          <div>
            <Tag
              icon={<SnippetsTwoTone className={styles.statisticTitleIcon} />}
              color={eventTargetData && typeToColor(eventTargetData.type)}
            >
              {eventTargetData && typeToString(eventTargetData.type)}
            </Tag>
            {eventTargetData && eventTargetData.title}
          </div>
        }
        visible={isModalVisible}
        onCancel={setIsModalVisible}
        width={600}
        footer={[
          <Button
            key="fix"
            onClick={() => {
              handelFixMyRecruitmentItem(eventTargetData);
            }}
          >
            <Popover content={<div>編集</div>}>
              <EditTwoTone />
            </Popover>
          </Button>,
          <Button
            key="delete"
            onClick={() => {
              handelDeleteMyRecruitmentItem(eventTargetData.id);
            }}
          >
            <Popover content={<div>予定を削除</div>}>
              <DeleteTwoTone />
            </Popover>
          </Button>,
        ]}
      >
        <div>
          <Row>
            <Col span={14}>
              <Statistic
                title={
                  <div>
                    <CalendarOutlined className={styles.statisticTitleIcon} />
                    start
                  </div>
                }
                value={
                  eventTargetData.start &&
                  format(
                    new Date(eventTargetData && eventTargetData.start),
                    "yyyy年MM月dd日(E) HH時mm分 ~ ",
                    { locale: ja }
                  )
                }
                valueStyle={{ fontSize: "20px" }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title={"end"}
                value={
                  eventTargetData.end &&
                  format(new Date(eventTargetData.end), "HH時mm分", {
                    locale: ja,
                  })
                }
                valueStyle={{ fontSize: "20px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Statistic
                title={
                  <div>
                    <EnvironmentOutlined
                      className={styles.statisticTitleIcon}
                    />
                    place
                  </div>
                }
                value={eventTargetData && eventTargetData.place}
                valueStyle={{ fontSize: "20px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Statistic
                title={
                  <div>
                    <ProfileOutlined className={styles.statisticTitleIcon} />
                    content
                  </div>
                }
                value={eventTargetData && eventTargetData.content}
                valueStyle={{ fontSize: "20px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Statistic
                title={
                  <div>
                    <DollarCircleOutlined
                      className={styles.statisticTitleIcon}
                    />
                    paidContent
                  </div>
                }
                value={
                  eventTargetData.paidContent
                    ? eventTargetData.paidContent
                    : "無償"
                }
                valueStyle={{ fontSize: "20px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Statistic
                title={
                  <div>
                    <UserOutlined className={styles.statisticTitleIcon} />
                    numberLimit
                  </div>
                }
                value={eventTargetData && eventTargetData.numberLimit + "名"}
                valueStyle={{ fontSize: "20px" }}
              />
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};
