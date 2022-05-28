import React from "react";
import { List, Typography, Divider } from "antd";
import { TagTwoTone, TrophyTwoTone } from "@ant-design/icons";

interface IProps {
  tagLoading: boolean;
  tagError: string | null;
  tags: any[];
}

export const HotTags: React.FC<IProps> = ({ tags }) => {
  return (
    <>
      <Divider>
        <TagTwoTone style={{ paddingRight: 10 }} />
        タグランキング
      </Divider>
      <List
        dataSource={tags}
        renderItem={(item, index) => (
          <List.Item>
            <Typography.Text style={{ paddingRight: 10 }}>
              {index + 1 === 1 ? (
                <TrophyTwoTone twoToneColor="#ffff00" />
              ) : (
                index + 1
              )}
            </Typography.Text>
            {item.name}
          </List.Item>
        )}
      ></List>
    </>
  );
};
