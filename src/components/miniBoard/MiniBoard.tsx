import React from "react";
import { Card, Avatar, Tag } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";

import styles from "./MiniBoard.module.css";

export const MiniBoard: React.FC = () => {
  return (
    <div className={styles.miniBoardContent}>
      <div className="site-card-border-less-wrapper">
        <Card title="おすすめ募集">
          <Card
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="釣り仲間ゆるぼ"
              description="都内のとある場所に釣り行く"
            />
            <div style={{ paddingTop: "10px" }}>
              <Tag color="magenta">都内</Tag>
              <Tag color="red">釣り</Tag>
              <Tag color="volcano">海</Tag>
            </div>
          </Card>
          <Card
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="カラオケ"
              description="夜更かしカラオケ"
            />
            <div style={{ paddingTop: "10px" }}>
              <Tag color="magenta">無料</Tag>
              <Tag color="red">カラオケ</Tag>
              <Tag color="volcano">新宿</Tag>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};
