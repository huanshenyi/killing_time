import React, { useState } from "react";
import { Modal } from "antd";

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
      >
        ok
      </Modal>
    </>
  );
};
