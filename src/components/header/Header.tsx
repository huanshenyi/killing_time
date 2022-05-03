import React, { useState, useEffect } from "react";
import {
  Layout,
  Typography,
  Button,
  Avatar,
  Dropdown,
  Space,
  Menu,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import logo from "../../assets/favicon.svg";
import { Login } from "@/components";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import { useSelector } from "@/redux/hooks";
import { userSlice } from "@/redux/user/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface JwtPayload extends DefaultJwtPayload {
  id: number;
  username: string;
  icon: string;
}

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = useSelector((state) => state.user.token);
  const [userData, setUserData] = useState<JwtPayload>();
  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayload>(jwt);
      setUserData({
        id: token.id,
        username: token.username,
        icon: token.icon,
      });
    }
  }, [jwt]);

  const [isShowLogin, setIsShowLogin] = useState<boolean>(false);
  const handelCloseLogin = () => {
    setIsShowLogin(false);
  };
  const handelLogin = () => {
    setIsShowLogin(true);
  };
  const handelSignOut = () => {
    dispatch(userSlice.actions.logOut());
    navigate("/");
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
        {jwt ? (
          <Dropdown
            arrow
            placement="bottomRight"
            overlay={
              <Menu style={{ width: 200 }}>
                <Menu.Item>{userData?.username}</Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={handelSignOut}>signOut</Menu.Item>
              </Menu>
            }
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar src={userData?.icon} />
              </Space>
            </a>
          </Dropdown>
        ) : (
          <div onClick={handelLogin}>
            <Button type="primary" shape="round" icon={<UserOutlined />}>
              Login
            </Button>
          </div>
        )}
        <Login isShow={isShowLogin} onClose={handelCloseLogin} />
      </Layout.Header>
    </div>
  );
};
