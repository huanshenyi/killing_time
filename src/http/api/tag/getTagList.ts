import { axios } from "@/http/request";
import qs from "query-string";

interface GetParment {
  status: number;
  page: number;
  limt: number;
}

export const getTagListApi = (parment?: GetParment) => {
  if (parment) {
    return axios.get("/tag" + "?" + qs.stringify(parment));
  }
  return axios.get("/tag");
};
