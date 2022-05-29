import React from "react";
import { List, Typography, Divider } from "antd";
import { TagTwoTone, TrophyTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import stytls from "./SideBox.module.css";

interface IProps {
  tagLoading: boolean;
  tagError: string | null;
  tags: any[];
}

export const HotTags: React.FC<IProps> = ({ tags, tagLoading }) => {
  const navigate = useNavigate();
  if (tagLoading) {
    return (
      <>
        <Divider>
          <TagTwoTone style={{ paddingRight: 10 }} />
          タグランキング
        </Divider>
      </>
    );
  }

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
            <Typography.Text style={{ float: "left" }}>
              {index + 1 === 1 ? (
                <TrophyTwoTone twoToneColor="#ffff00" />
              ) : null}
              {index + 1 === 2 ? (
                <TrophyTwoTone twoToneColor="#b0c4de" />
              ) : null}
              {index + 1 === 3 ? (
                <TrophyTwoTone twoToneColor="#ffa500" />
              ) : null}
              {index + 1 > 3 ? index + 1 : null}
            </Typography.Text>
            <a
              onClick={() => navigate(`/tags/${item.id}`)}
              className={stytls["hotTag-title"]}
            >
              {item.name}
            </a>
            <div></div>
          </List.Item>
        )}
      ></List>
    </>
  );
};
