import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Switch,
  TimePicker,
  InputNumber,
} from "antd";
import { useSelector } from "@/redux/hooks";
import {
  RecruitmentItemContext,
  initialState,
} from "@/redux/recruitmentItem/slice";
import moment from "moment";

interface IProps {
  visible: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

export const CalenderCellFixModal: React.FC<IProps> = ({
  visible,
  handleCancel,
  handleOk,
}) => {
  const [isFullDay, setIsFullDay] = useState<boolean>(true);
  const [isPaid, setPaid] = useState<boolean>(false);

  const recruitmentItem = useSelector((state) => state.recruitmentItem);
  const taday = recruitmentItem.start.substring(0, 10);

  useEffect(() => {
    setIsFullDay(recruitmentItem.fullday);
  }, [recruitmentItem]);

  const onSubmit = (value: RecruitmentItemContext) => {
    console.log(value);
  };

  const chanageFullDay = () => {
    setIsFullDay(!isFullDay);
  };
  const chanagePaid = () => {
    setPaid(!isPaid);
  };
  return (
    <>
      <Modal
        title="募集修正"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          onFinish={onSubmit}
          initialValues={{
            ...recruitmentItem,
            start: moment(recruitmentItem.start, "HH:mm:ss"),
            end: moment(recruitmentItem.end, "HH:mm:ss"),
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
              label={taday ? taday + "開始予定" : "開始予定"}
            >
              <TimePicker placeholder={"時間を選択"} disabled={isFullDay} />
            </Form.Item>
            <Form.Item
              name="end"
              label={taday ? taday + "終了予定" : "終了予定"}
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
          <Form.Item label="最大応募人数" name="numberLimit">
            <InputNumber min={1} max={10} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              修正
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
