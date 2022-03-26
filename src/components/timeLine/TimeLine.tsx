import React from "react";
import { Card, Timeline, Space } from "antd";
import {
  SolutionOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./TimeLine.module.css";

export const TimeLine: React.FC = () => {
  return (
    <div className={styles.timeLineContent}>
      <Card
        title="直近タイムライン"
        extra={
          <Space align="start" size={5}>
            <SolutionOutlined style={{ fontSize: "16px", color: "red" }} />
            <div>応募</div>
            <ProfileOutlined style={{ fontSize: "16px", color: "green" }} />
            <div>募集</div>
          </Space>
        }
      >
        <Timeline mode={"left"}>
          <Timeline.Item
            label="2015-09-01"
            dot={<SolutionOutlined style={{ fontSize: "16px" }} />}
            color="red"
          >
            Create a services
          </Timeline.Item>
          <Timeline.Item
            label="2015-09-01 09:12:11"
            color="green"
            dot={<ProfileOutlined style={{ fontSize: "16px" }} />}
          >
            <div>Solve initial</div>
          </Timeline.Item>
          <Timeline.Item
            label="2015-09-01 09:12:11"
            color="green"
            dot={<ProfileOutlined style={{ fontSize: "16px" }} />}
          >
            Network problems
          </Timeline.Item>
        </Timeline>
      </Card>
    </div>
  );
};
