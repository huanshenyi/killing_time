import React, { useState } from "react";
import { Calendar } from "antd";
import { CalendarCellModal } from "../CalendarCellModal";
import ja from "antd/lib/calendar/locale/ja_JP";
import { Moment } from "moment";

import styles from "./MyCalendar.module.css";

export const MyCalendar: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<Moment | undefined>();

  const selectHandel = (e: Moment | undefined) => {
    showModal();
    setSelectDate(e);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className={styles["my-calendar"]}>
        <CalendarCellModal
          title="募集追加"
          visible={isModalVisible}
          selectDate={selectDate}
          handleCancel={handleCancel}
          handleOk={handleOk}
        />
        <Calendar locale={ja} onSelect={selectHandel} />
      </div>
    </>
  );
};
