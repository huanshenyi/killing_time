import { Row, Col } from "antd";
import { HotTags } from "./HotTags";
import { HotUsers } from "./HotUsers";
import styles from "./SideBox.module.css";

export const SideBox: React.FC = () => {
  return (
    <div className={styles["sideBox-list-container"]}>
      <Row>
        <Col span={24}>
          <div className={styles["sideBox-card-container"]}>
            <HotTags tags={[]} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className={styles["sideBox-card-container"]}>
            <HotUsers userList={[]} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
