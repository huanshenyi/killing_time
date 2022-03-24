import React from "react";
import { Calendar, Badge } from "antd";
import ja from "antd/lib/calendar/locale/ja_JP";
import styles from "./MyCalendar.module.css";

export const MyCalendar: React.FC = () => {
  return (
    <>
      <div className={styles["my-calendar"]}>
        <Calendar locale={ja} />
      </div>
    </>
  );
};
