import React from "react";
import { Card, Timeline, Space } from "antd";
import { subDays } from "date-fns";
import {
  SolutionOutlined,
  ProfileOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { PostMyRecruitmentItem } from "@/http/api/recruitment/postMyRecruitment";
import { recruitmentColor, applicationColor, freeTimeColor } from "@/utils";

import styles from "./TimeLine.module.css";

interface IProps {
  myRecruitment: [];
}

export const TimeLine: React.FC<IProps> = ({ myRecruitment }) => {
  if (myRecruitment == null) {
    myRecruitment = [];
  }
  const typeToColor = (value: string) => {
    switch (value) {
      case "recruitment":
        return recruitmentColor;
      case "application":
        return applicationColor;
      case "freeTime":
        return freeTimeColor;
    }
  };

  const typeToIcon = (value: string) => {
    switch (value) {
      case "recruitment":
        return (
          <ProfileOutlined
            style={{ fontSize: "16px", color: recruitmentColor }}
          />
        );
      case "application":
        return (
          <SolutionOutlined
            style={{ fontSize: "16px", color: applicationColor }}
          />
        );
      case "freeTime":
        return (
          <CalendarOutlined
            style={{ fontSize: "16px", color: freeTimeColor }}
          />
        );
    }
  };

  return (
    <div className={styles.timeLineContent}>
      <Card
        title="直近タイムライン"
        extra={
          <Space align="start" size={5}>
            <SolutionOutlined
              style={{ fontSize: "16px", color: applicationColor }}
            />
            <div>応募</div>
            <ProfileOutlined
              style={{ fontSize: "16px", color: recruitmentColor }}
            />
            <div>募集</div>
            <CalendarOutlined
              style={{ fontSize: "16px", color: freeTimeColor }}
            />
            <div>空き時間</div>
          </Space>
        }
      >
        <Timeline mode={"left"}>
          {myRecruitment.map((item: PostMyRecruitmentItem, index: number) => {
            if (new Date(item.start) > subDays(new Date(), 1)) {
              return (
                <Timeline.Item
                  key={index}
                  label={item.start}
                  dot={typeToIcon(item.type)}
                  color={typeToColor(item.type)}
                >
                  {item.title}
                </Timeline.Item>
              );
            }
          })}
        </Timeline>
      </Card>
    </div>
  );
};
