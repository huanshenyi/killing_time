import React from "react";
import { List, Typography, Divider } from "antd";

interface IProps {
  tags: [];
}

export const HotTags: React.FC<IProps> = ({ tags }) => {
  return (
    <>
      <Divider>タグランキング</Divider>
      <List
        dataSource={tags}
        renderItem={(item, index) => (
          <List.Item>
            <Typography.Text>{index}</Typography.Text>
            {item}
          </List.Item>
        )}
      ></List>
    </>
  );
};
