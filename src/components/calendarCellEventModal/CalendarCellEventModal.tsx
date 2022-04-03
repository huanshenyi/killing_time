import React, { useState } from "react";
import { Modal, Button, Popover } from "antd";
import {
  CalendarTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  BankTwoTone,
} from "@ant-design/icons";

import styles from "./CalendarCellEventModal.module.css";

interface IProps {
  isModalVisible: boolean;
  eventTargetData: any;
  setIsModalVisible: () => void;
}

export const CalendarCellEventModal: React.FC<IProps> = (props) => {
  const { isModalVisible, eventTargetData, setIsModalVisible } = props;

  return (
    <>
      <Modal
        title={eventTargetData.title}
        visible={isModalVisible}
        onCancel={setIsModalVisible}
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
          <CalendarTwoTone /> start: {eventTargetData.start} end:
          {eventTargetData.end}
        </div>
        <div>
          <BankTwoTone />
          {eventTargetData.place}
        </div>
      </Modal>
    </>
  );
};
