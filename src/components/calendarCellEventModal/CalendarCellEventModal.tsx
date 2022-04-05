import React from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import {
  Modal,
  Button,
  Popover,
  Descriptions,
  Row,
  Col,
  Statistic,
} from "antd";
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

import styles from "./CalendarCellEventModal.module.css";

interface IProps {
  isModalVisible: boolean;
  eventTargetData: any;
  setIsModalVisible: () => void;
}

export const CalendarCellEventModal: React.FC<IProps> = (props) => {
  const { isModalVisible, eventTargetData, setIsModalVisible } = props;
  // TODO:: 時間の表示は 20xx月xx日 xx時xx分 ~ xx時xx分
  // fulldayで表示制御する
  return (
    <>
      <Modal
        title={
          <div>
            <SnippetsTwoTone className={styles.statisticTitleIcon} />
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
              console.log(eventTargetData.id);
            }}
          >
            <Popover content={<div>編集</div>}>
              <EditTwoTone />
            </Popover>
          </Button>,
          <Button
            key="delete"
            onClick={() => {
              console.log(eventTargetData.id);
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
                    ? "無償"
                    : eventTargetData.paidContent
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
