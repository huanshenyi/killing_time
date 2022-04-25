import React from "react";
import { Header } from "@/components";
import styles from "./MainLayout.module.css";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["mian-layout-content"]}>{children}</div>
    </>
  );
};
