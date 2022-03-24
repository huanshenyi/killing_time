import React from "react";

import { Header, MyCalendar } from "../../components";

import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        <MyCalendar />
      </div>
    </>
  );
};
