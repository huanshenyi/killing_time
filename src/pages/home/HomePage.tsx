import React from "react";

import { MyCalendar } from "../../components";

import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles["page-content"]}>
        <MyCalendar />
      </div>
    </>
  );
};
