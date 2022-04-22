import React, { useState, useEffect } from "react";
import { Card, Timeline, Space, Empty } from "antd";
import { addDays, format } from "date-fns";
import {
  SolutionOutlined,
  ProfileOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { PostMyRecruitmentItem } from "@/http/api/recruitment/postMyRecruitment";
import { recruitmentColor, applicationColor, freeTimeColor } from "@/utils";

import styles from "./TimeLine.module.css";
import ja from "date-fns/locale/ja";

interface IProps {
  myRecruitment: [];
}

export const TimeLine: React.FC<IProps> = ({ myRecruitment }) => {
  const [weekMyRecruitment, setWeekMyRecruitment] = useState([]);
  if (myRecruitment == null) {
    myRecruitment = [];
  }
  useEffect(() => {
    const recruitmentList = myRecruitment.filter(
      (item: PostMyRecruitmentItem) =>
        addDays(new Date(), 7) > new Date(item.start) &&
        new Date(item.start) > new Date()
    );
    setWeekMyRecruitment(recruitmentList);
  }, []);

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
        title="週間タイムライン"
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
          {weekMyRecruitment.map(
            (item: PostMyRecruitmentItem, index: number) => {
              if (
                addDays(new Date(), 7) > new Date(item.start) &&
                new Date(item.start) > new Date()
              ) {
                return (
                  <Timeline.Item
                    key={index}
                    label={format(
                      new Date(item.start),
                      "yyyy年M月d日(E) HH:mm",
                      {
                        locale: ja,
                      }
                    )}
                    dot={typeToIcon(item.type)}
                    color={typeToColor(item.type)}
                  >
                    {item.title}
                  </Timeline.Item>
                );
              }
            }
          )}
        </Timeline>
        {weekMyRecruitment.length ? (
          ""
        ) : (
          <Empty description={"週間予定ありません"} />
        )}
      </Card>
    </div>
  );
};
