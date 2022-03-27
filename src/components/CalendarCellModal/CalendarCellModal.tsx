import React from "react";
import { Modal, Form, Input, TimePicker, Button, Switch } from "antd";
import { DateClickArg } from "@fullcalendar/interaction";
import { Moment } from "moment";

import styles from "./CalendarCellModal.module.css";

interface IProps {
  title: string;
  visible: boolean;
  selectDate?: DateClickArg | undefined;
  handleCancel: () => void;
  handleOk: () => void;
}

export const CalendarCellModal: React.FC<IProps> = (props) => {
  const { title, visible, selectDate, handleOk, handleCancel } = props;

  const onFinish = (values: any) => {
    console.log("Success:", values, values.end.format("HH:mm:ss"));
    handleOk();
  };

  return (
    <>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          onFinish={onFinish}
          initialValues={{
            title: "",
            place: "",
            checked: true,
            start: "",
            end: "",
            content: "",
          }}
        >
          <Form.Item label="" name="title">
            <Input placeholder="タイトルを入力してください" />
          </Form.Item>
          <Form.Item label="" name="place">
            <Input placeholder="場所を入力してください" />
          </Form.Item>
          <Form.Item label="終日" name="checked" valuePropName="checked">
            <Switch style={{ marginRight: "10px" }} />
          </Form.Item>
          <Input.Group>
            <Form.Item
              name="start"
              label={selectDate ? selectDate.dateStr + " 開始予定" : "開始予定"}
            >
              <TimePicker placeholder={"時間を選択"} />
            </Form.Item>
            <Form.Item
              name="end"
              label={selectDate ? selectDate.dateStr + " 終了予定" : "終了予定"}
            >
              <TimePicker placeholder={"時間を選択"} />
            </Form.Item>
          </Input.Group>
          <Form.Item name="content">
            <Input.TextArea
              showCount
              maxLength={150}
              placeholder="募集詳細を入力してください"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提出
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
