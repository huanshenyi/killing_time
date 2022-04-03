import { axios } from "../../request";
import { format } from "date-fns";

export interface PostMyRecruitmentItem {
  /**
   * @remarks 募集内容追加用
   * @param title       - 募集名
   * @param place       - 実施場所
   * @param fullday     - 一日必要なものか
   * @param start       - 開始時間
   * @param end         - 終了時間
   * @param content     - 募集詳細
   * @param paid        - 募集は有償か無償
   * @param paidContent - 奨励内容
   * @param numberLimit - 制限人数
   * @param type        - 募集か応募か
   */
  title: string;
  place: string;
  fullday: true;
  start: string;
  end: string;
  content: string;
  paid: false;
  paidContent: string;
  numberLimit: number;
  type?: "recruitment" | "application";
}

export const postMyRecruitmentApi = (value: PostMyRecruitmentItem) => {
  const recruitmentBody: PostMyRecruitmentItem = value;
  recruitmentBody.start = format(new Date(value.start), "yyyy-MM-dd HH:mm:ss");
  recruitmentBody.end = format(new Date(value.end), "yyyy-MM-dd HH:mm:ss");
  console.log(recruitmentBody.start, recruitmentBody.end);
  return axios.post("/myRecruitment", recruitmentBody);
};
