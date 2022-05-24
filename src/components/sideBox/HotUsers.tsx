import React from "react";
import { List, Typography, Divider } from "antd";

interface IProps {
  userList: [];
}

export const HotUsers: React.FC<IProps> = ({ userList }) => {
  return (
    <>
      <Divider>ユーザーランキング</Divider>
      <List
        dataSource={userList}
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
