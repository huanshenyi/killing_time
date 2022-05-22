import React from "react";
import { List, Typography, Avatar, Space } from "antd";
import { RecruitmentType } from "@/models";
import {
  CalendarOutlined,
  TransactionOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export interface RecruitmentItem {
  id: number;
  title: string;
  place: string;
  fullday: boolean;
  start: string;
  end: string;
  content: string;
  paid: false;
  paidContent: string;
  numberLimit: number;
  type: RecruitmentType;
  userId: number;
  img?: string;
}

interface IProps {
  dataList: RecruitmentItem[];
  showType: RecruitmentType;
  paging?: any;
  onPageChange?: (nextPage: number, pageSize: number) => void;
}

const listData = (itemList: RecruitmentItem[], showType: RecruitmentType) =>
  itemList.filter((item) =>
    item.type === showType
      ? {
          id: item.id,
          title: item.title,
          place: item.place,
          fullday: item.fullday,
          start: item.start,
          end: item.end,
          content: item.content,
          paid: item.paid,
          paidContent: item.paidContent,
          numberLimit: item.numberLimit,
          type: item.type,
          userId: item.userId,
          img: null,
        }
      : null
  );

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const RecruitmentAndFreeTimeList: React.FC<IProps> = ({
  dataList,
  showType,
}) => {
  const { Text } = Typography;
  const recruitmentList = listData(dataList, showType);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 8,
      }}
      dataSource={recruitmentList}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <IconText
              icon={TeamOutlined}
              text={item.numberLimit}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={TransactionOutlined}
              text={item.paid ? item.paidContent : "無報酬"}
              key="list-vertical-like-o"
            />,
            <IconText
              icon={CalendarOutlined}
              text={
                item.fullday ? "終日" : item.start.substring(0, 13) + "時から"
              }
              key="list-vertical-message"
            />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={
                item.img
                  ? item.img
                  : "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              }
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
            title={
              <Text style={{ fontSize: 18, fontWeight: 400 }}>
                {item.title}
              </Text>
            }
            description={item.place}
          />
          {item.content ? item.content : "詳細の記入ありません。"}
        </List.Item>
      )}
    ></List>
  );
};
