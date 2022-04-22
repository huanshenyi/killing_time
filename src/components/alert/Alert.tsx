import React from "react";
import { Alert as AntdAlert } from "antd";
import { useSelector } from "@/redux/hooks";

import styles from "./Alert.module.css";

export interface AlertProps {}

export const Alert: React.FC<AlertProps> = ({}) => {
  const visible = useSelector((state) => state.alertControl.visible);
  const message = useSelector((state) => state.alertControl.context.message);
  const type = useSelector((state) => state.alertControl.context.type);
  const description = useSelector(
    (state) => state.alertControl.context.description
  );
  return (
    <div>
      {visible ? (
        <div className={styles.alertBox}>
          <AntdAlert
            message={message}
            description={description}
            type={type}
            showIcon
          />
        </div>
      ) : null}
    </div>
  );
};
