import styles from "./Login.module.css";
import { Row, Col, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface IProps {
  isShow: boolean;
  onClose: () => void;
}

export const Login: React.FC<IProps> = ({ isShow, onClose }) => {
  const handelClose = () => {
    onClose && onClose();
  };
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
        <Row style={{ lineHeight: "31px" }}>
          <Col span={24}>
            <input className={styles.loginInput} placeholder="email" />
          </Col>
        </Row>
        <Row style={{ lineHeight: "31px" }}>
          <Col span={24}>
            <input className={styles.loginInput} placeholder="password" />
          </Col>
        </Row>
        <Row style={{ lineHeight: "32px" }}>
          <Col span={24}>
            <Button type="primary" size="large">
              Login
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>google login</Button>
          </Col>
          <Col span={8}>
            <Button>github login</Button>
          </Col>
        </Row>
        <Row style={{ lineHeight: "32px" }}>
          <Col>
            <div className={styles.loginPrivacy}>xxxxxxxxx</div>
          </Col>
        </Row>
      </div>
    </div>
  ) : null;
};
