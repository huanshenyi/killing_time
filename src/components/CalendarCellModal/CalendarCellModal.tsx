import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  TimePicker,
  Button,
  Switch,
  InputNumber,
  Select,
} from "antd";
import { DateClickArg } from "@fullcalendar/interaction";
import { useDispatch } from "react-redux";
import {
  postMyRecruitment,
  getMyRecruitment,
} from "../../redux/myRecruitment/slice";
import { initialMyRecruitmentItemData } from "../../models/recruitment";

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
  const { Option } = Select;

  const [isFullDay, setIsFullDay] = useState<boolean>(true);
  const [isPaid, setPaid] = useState<boolean>(false);

  const dispatch = useDispatch();

  const chanageFullDay = () => {
    setIsFullDay(!isFullDay);
  };

  const chanagePaid = () => {
    setPaid(!isPaid);
  };

  const randomRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const onTypeChange = (value: string) => {
    console.log(value);
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
    initialMyRecruitmentItemData.title = values.title;
    initialMyRecruitmentItemData.place = values.place;
    initialMyRecruitmentItemData.fullday = values.fullday;
    initialMyRecruitmentItemData.start = values.start;
    initialMyRecruitmentItemData.end = values.end;
    initialMyRecruitmentItemData.content = values.content;
    initialMyRecruitmentItemData.paid = values.paid;
    initialMyRecruitmentItemData.paidContent = values.paidContent;
    initialMyRecruitmentItemData.numberLimit = values.numberLimit;
    initialMyRecruitmentItemData.type = values.type;
    dispatch(postMyRecruitment(initialMyRecruitmentItemData));
    handleOk();
    dispatch(getMyRecruitment(1));
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
            numberLimit: 1,
            type: "recruitment",
          }}
        >
          <Form.Item name="type" rules={[{ required: true }]}>
            <Select
              placeholder="イベントタイプを選びください"
              onChange={onTypeChange}
            >
              <Option value="recruitment">募集</Option>
              <Option value="freeTime">空き時間</Option>
            </Select>
          </Form.Item>
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
          <Form.Item label="最大応募人数" name="numberLimit">
            <InputNumber min={1} max={10} />
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
