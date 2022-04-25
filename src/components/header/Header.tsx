import React, { useState } from "react";
import { Layout, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import logo from "../../assets/favicon.svg";
import { Login } from "@/components";

export const Header: React.FC = () => {
  const [isShowLogin, setIsShowLogin] = useState<boolean>(false);
  const handelCloseLogin = () => {
    setIsShowLogin(false);
  };
  const handelLogin = () => {
    setIsShowLogin(true);
  };
  return (
    <div className={styles["app-header"]}>
      <Layout.Header className={styles.header}>
        <span>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles["title"]}>
            フリータイム
          </Typography.Title>
        </span>
        <div onClick={handelLogin}>
          <Button type="primary" shape="round" icon={<UserOutlined />}>
            Login
          </Button>
        </div>
        <Login isShow={isShowLogin} onClose={handelCloseLogin} />
      </Layout.Header>
    </div>
  );
};
