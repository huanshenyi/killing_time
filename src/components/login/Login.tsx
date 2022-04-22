import styles from "./Login.module.css";
import { Row, Col } from "antd";

interface IProps {
  isShow: boolean;
  onClose: () => void;
}

export const Login: React.FC<IProps> = ({ isShow, onClose }) => {
  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <Row>
          <Col span={2} offset={22}>
            x
          </Col>
        </Row>
      </div>
    </div>
  ) : null;
};
