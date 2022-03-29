// 募集内容処理用のReducer
interface recruitmentItem {
  title: string;
  place: string;
  fullday: boolean;
  start: string;
  end: string;
  content: string;
  paid: boolean;
  status?: boolean;
}

interface recruitmentState {
  recruitmentList: recruitmentItem[];
}

const defaultState: recruitmentState = {
  recruitmentList: [
    {
      title: "",
      place: "",
      fullday: true,
      start: "",
      end: "",
      content: "",
      paid: false,
      status: false,
    },
  ],
};

export default (state = defaultState, action: any) => {
  return state;
};
