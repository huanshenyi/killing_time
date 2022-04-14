import React from "react";
import { Modal, Form } from "antd";
import { useSelector } from "@/redux/hooks";

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
  const recruitmentItem = useSelector((state) => state.recruitmentItem);
  return (
    <>
      <Modal
        title="募集修正"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form></Form>
      </Modal>
    </>
  );
};
