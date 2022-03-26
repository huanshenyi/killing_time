import React from "react";
import { Card } from "antd";

import styles from "./MiniBoard.module.css";

export const MiniBoard: React.FC = () => {
  return (
    <div className={styles.miniBoardContent}>
      <div className="site-card-border-less-wrapper">
        <Card title="おすすめミンション">
          <p>MiniBoard</p>
        </Card>
      </div>
    </div>
  );
};
