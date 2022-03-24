import React from "react";
import { Layout, Typography } from "antd";
import styles from "./Header.module.css";
import logo from "../../assets/favicon.svg";

export const Header: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
      <Layout.Header className={styles.header}>
        <span>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles["title"]}>
            フリータイム
          </Typography.Title>
        </span>
      </Layout.Header>
    </div>
  );
};
