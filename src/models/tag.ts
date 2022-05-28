export interface TagItem {
  /**
   * @remarks 募集に紐づくタグ
   * @param id           - タグID
   * @param name         - タグ名
   * @param status       - 0, 1 1の場合は使用
   * @param createAt     - 生成時間
   * @param UpdateAt     - 修正された時間
   */
  id: number;
  name: string;
  status: number;
  createAt: string;
  updateAt: string;
}
