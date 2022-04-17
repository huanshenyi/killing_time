import { axios } from "@/http/request";
import { format } from "date-fns";
import { RecruitmentType } from "@/models/recruitment";

export interface PutMyRecruitmentItem {
  /**
   * @remarks           - 募集内容修正用
   * @param id          - 募集id
   * @param title       - 募集名
   * @param place       - 実施場所
   * @param fullday     - 一日必要なものか
   * @param start       - 開始時間
   * @param end         - 終了時間
   * @param content     - 募集詳細
   * @param paid        - 募集は有償か無償
   * @param paidContent - 奨励内容
   * @param numberLimit - 制限人数
   * @param type        - 募集か応募か空き時間か("recruitment" | "openTime" | "application" | "")
   */
  id: number;
  title: string;
  place: string;
  fullday: true;
  start: string;
  end: string;
  content: string;
  paid: false;
  paidContent: string;
  numberLimit: number;
  type: RecruitmentType;
}

export const putMyRecruitmentApi = (value: PutMyRecruitmentItem) => {
  const recruitmentBody: PutMyRecruitmentItem = value;
  recruitmentBody.start = format(new Date(value.start), "yyyy-MM-dd HH:mm:ss");
  recruitmentBody.end = format(new Date(value.end), "yyyy-MM-dd HH:mm:ss");
  return axios.put(`/myRecruitment/${recruitmentBody.id}`, recruitmentBody);
};
