import React from "react";
import { PostMyRecruitmentItem } from "@/http/api/recruitment/postMyRecruitment";

interface IProps {
  dataList: any[];
  paging?: any;
  onPageChange?: (nextPage: number, pageSize: number) => void;
}

export const RecruitmentAndFreeTimeList: React.FC<IProps> = ({ dataList }) => {
  console.log(dataList);
  return <div>RecruitmentAndFreeTimeList</div>;
};
