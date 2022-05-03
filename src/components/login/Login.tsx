import styles from "./Login.module.css";
import { Row, Col, Button, message, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { signIn } from "@/redux/user/slice";
import { useDispatch } from "react-redux";
import { useSelector } from "@/redux/hooks";

interface IProps {
  isShow: boolean;
  onClose: () => void;
}

export const Login: React.FC<IProps> = ({ isShow, onClose }) => {
  const loading = useSelector((state) => state.user.loading);
  const jwt = useSelector((state) => state.user.token);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const handelClose = () => {
    onClose && onClose();
  };
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onFinish = (v: { email: string; password: string }) => {
    dispatch(signIn({ email: v.email, password: v.password }));
    handelClose();
  };
  const onFinishFailed = () => {};

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <Row style={{ lineHeight: "31px" }}>
          <Col span={2} offset={22}>
            <div className={styles.close} onClick={handelClose}>
              <CloseOutlined />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <div className={styles.loginIcon}>iconここに置く</div>
          </Col>
        </Row>
        <Form
          name="basic"
          initialValues={loginForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              placeholder="Emailを入力してください."
              style={{ borderRadius: 5 }}
            />
          </Form.Item>

          <Form.Item
            tooltip="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Passwordを入力してください."
              style={{ borderRadius: 5 }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              style={{ width: 110 }}
              loading={loading}
            >
              ログイン
            </Button>
          </Form.Item>
        </Form>
        <Row style={{ lineHeight: "32px" }}>
          <Col>
            <Button>google login</Button>
          </Col>
          <Col span={8}>
            <Button>github login</Button>
          </Col>
        </Row>
        <Row style={{ lineHeight: "30px" }}>
          <Col>
            <div className={styles.loginPrivacy}>プライバシ何か</div>
          </Col>
        </Row>
      </div>
    </div>
  ) : null;
};
