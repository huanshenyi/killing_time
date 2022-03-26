import React from "react";
import { Card, Timeline } from "antd";

import styles from "./TimeLine.module.css";

export const TimeLine: React.FC = () => {
  return (
    <div className={styles.timeLineContent}>
      <Card
        title="直近タイムライン"
        extra={
          <div>
            <div>
              <span className="ant-timeline-item-head ant-timeline-item-head-red" />
              タスク
            </div>
            <div>
              <span className="ant-timeline-item-head ant-timeline-item-head-green" />
              依頼
            </div>
          </div>
        }
      >
        <Timeline mode={"left"}>
          <Timeline.Item label="2015-09-01" color="red">
            Create a services
          </Timeline.Item>
          <Timeline.Item label="2015-09-01 09:12:11" color="green">
            Solve initial
          </Timeline.Item>
          <Timeline.Item label="2015-09-01 09:12:11" color="red">
            Network problems
          </Timeline.Item>
        </Timeline>
      </Card>
    </div>
  );
};
