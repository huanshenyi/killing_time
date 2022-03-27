import React, { useState } from "react";
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

  const [isFullDay, setIsFullDay] = useState<boolean>(true);
  const [isPaid, setPaid] = useState<boolean>(false);

  const chanageFullDay = () => {
    setIsFullDay(!isFullDay);
  };

  const chanagePaid = () => {
    setPaid(!isPaid);
  };

  const onFinish = (values: any) => {
    values.paid = isPaid;
    values.fullday = isFullDay;
    if (values.fullday) {
      values.start = selectDate && selectDate.dateStr + " 00:00:00";
      values.end = selectDate && selectDate.dateStr + " 23:59:59";
    } else {
      values.start =
        selectDate && selectDate.dateStr + values.start.format(" HH:mm:ss");
      values.end =
        selectDate && selectDate.dateStr + values.end.format(" HH:mm:ss");
    }
    console.log("Success:", values);
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
            fullday: true,
            start: "",
            end: "",
            content: "",
            paid: false,
          }}
        >
          <Form.Item label="" name="title">
            <Input placeholder="タイトルを入力してください" />
          </Form.Item>
          <Form.Item label="" name="place">
            <Input placeholder="場所を入力してください" />
          </Form.Item>
          <Form.Item label="終日">
            <Switch
              style={{ marginRight: "10px" }}
              onChange={chanageFullDay}
              defaultChecked
            />
          </Form.Item>
          <Input.Group>
            <Form.Item
              name="start"
              label={selectDate ? selectDate.dateStr + " 開始予定" : "開始予定"}
            >
              <TimePicker placeholder={"時間を選択"} disabled={isFullDay} />
            </Form.Item>
            <Form.Item
              name="end"
              label={selectDate ? selectDate.dateStr + " 終了予定" : "終了予定"}
            >
              <TimePicker placeholder={"時間を選択"} disabled={isFullDay} />
            </Form.Item>
          </Input.Group>
          <Form.Item name="content">
            <Input.TextArea
              showCount
              maxLength={150}
              placeholder="募集詳細を入力してください"
            />
          </Form.Item>
          <Form.Item label="有償">
            <Switch onChange={chanagePaid} />
          </Form.Item>
          <Form.Item name="paidContent">
            <Input disabled={!isPaid} placeholder="報酬内容を入力ください" />
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
