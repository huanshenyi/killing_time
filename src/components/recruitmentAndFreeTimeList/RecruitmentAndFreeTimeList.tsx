import React from "react";
import { PostMyRecruitmentItem } from "@/http/api/recruitment/postMyRecruitment";

interface IProps {
  data: [];
  paging?: any;
  onPageChange?: (nextPage: number, pageSize: number) => void;
}

export const RecruitmentAndFreeTimeList: React.FC<IProps> = () => {
  return <div>RecruitmentAndFreeTimeList</div>;
};
