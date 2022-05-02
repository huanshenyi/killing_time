import { axios } from "@/http/request";

export interface LoginParamaters {
  email: string;
  password: string;
}

export const loginApi = (value: LoginParamaters) => {
  const loginBody: LoginParamaters = value;
  return axios.post("/login", { ...loginBody });
};
