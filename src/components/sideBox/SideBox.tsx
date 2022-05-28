import { Row, Col } from "antd";
import { HotTags } from "./HotTags";
import { HotUsers } from "./HotUsers";

import styles from "./SideBox.module.css";

interface Iprops {
  tagLoading: boolean;
  tagError: string | null;
  tagData: any;
}

export const SideBox: React.FC<Iprops> = ({
  tagData,
  tagError,
  tagLoading,
}) => {
  return (
    <div className={styles["sideBox-list-container"]}>
      <Row>
        <Col span={24}>
          <div className={styles["sideBox-card-container"]}>
            <HotTags
              tags={tagData}
              tagError={tagError}
              tagLoading={tagLoading}
            />
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
