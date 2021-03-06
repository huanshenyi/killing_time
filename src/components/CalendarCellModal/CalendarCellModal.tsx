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
  user_id: number;
}

export const CalendarCellModal: React.FC<IProps> = (props) => {
  const { title, visible, selectDate, handleOk, handleCancel, user_id } = props;
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
    initialMyRecruitmentItemData.userId = user_id;
    dispatch(postMyRecruitment(initialMyRecruitmentItemData));
    handleOk();
    dispatch(getMyRecruitment(user_id));
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
              placeholder="????????????????????????????????????"
              onChange={onTypeChange}
            >
              <Option value="recruitment">??????</Option>
              <Option value="freeTime">????????????</Option>
            </Select>
          </Form.Item>
          <Form.Item label="" name="title">
            <Input placeholder="???????????????????????????????????????" />
          </Form.Item>
          <Form.Item label="" name="place">
            <Input placeholder="?????????????????????????????????" />
          </Form.Item>
          <Form.Item label="??????">
            <Switch
              style={{ marginRight: "10px" }}
              onChange={chanageFullDay}
              defaultChecked
            />
          </Form.Item>
          <Input.Group>
            <Form.Item
              name="start"
              label={selectDate ? selectDate.dateStr + " ????????????" : "????????????"}
            >
              <TimePicker placeholder={"???????????????"} disabled={isFullDay} />
            </Form.Item>
            <Form.Item
              name="end"
              label={selectDate ? selectDate.dateStr + " ????????????" : "????????????"}
            >
              <TimePicker placeholder={"???????????????"} disabled={isFullDay} />
            </Form.Item>
          </Input.Group>
          <Form.Item name="content">
            <Input.TextArea
              showCount
              maxLength={150}
              placeholder="???????????????????????????????????????"
            />
          </Form.Item>
          <Form.Item label="??????">
            <Switch onChange={chanagePaid} />
          </Form.Item>
          <Form.Item name="paidContent">
            <Input disabled={!isPaid} placeholder="?????????????????????????????????" />
          </Form.Item>
          <Form.Item label="??????????????????" name="numberLimit">
            <InputNumber min={1} max={10} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              ??????
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
