import React from "react";
import { Modal, Form, Input, Checkbox, Button } from "antd";

import styles from "./CalendarCellModal.module.css";

interface IProps {
  title: string;
  visible: boolean;
  selectDate: any;
  handleCancel: () => void;
  handleOk: () => void;
}

export const CalendarCellModal: React.FC<IProps> = (props) => {
  const { title, visible, selectDate, handleOk, handleCancel } = props;

  const onFinish = (values: any) => {
    console.log("Success:", values);
    handleOk();
  };

  // console.log(selectDate.toString());
  new Date().toString();

  return (
    <>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label=""
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input placeholder="タイトルを入力してください" />
          </Form.Item>
          <Form.Item
            name="allday"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>終日</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <div>{selectDate.toString()}</div>
        </Form>
      </Modal>
    </>
  );
};
