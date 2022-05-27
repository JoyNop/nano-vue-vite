import axios from "@/utils/http";

export const userLoginByName = (params: any) => {
  return axios.post("/admin/login", params);
};

export const userLogout = () => {
  return axios.get("/sys/login/token/logout");
};
