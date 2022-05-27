import { setObjToUrlParams } from "@/utils";
import axios from "@/utils/http";
export const getBlastAllUser = () => {
  return axios.get("/admin/user/all");
};
export const getBlastUserList = (query: any) => {
  const url = "/admin/user";
  const queryUrl = setObjToUrlParams(url, query);
  return axios.get(queryUrl);
};

export const resetPassword = (body: any) => {
  return axios.put("/admin/user/password", body);
};

export const switchUserState = (body: any) => {
  return axios.put(`/admin/user/approval`, body);
};
export const editUserDetail = (body: any) => {
  return axios.put(`/admin/user/info`, body);
};

export const switchOrgState = (state: number, id: number) => {
  return axios.put(`/admin/org/${id}/state/${state}`);
};

export const getBlasetOrgList = (query: any) => {
  const url = "/admin/org";
  const queryUrl = setObjToUrlParams(url, query);
  return axios.get(queryUrl);
};

export const editOrgDetail = (body: any) => {
  return axios.put(`/admin/org`, body);
};

export const createOrg = (body: any) => {
  return axios.post(`/admin/org`, body);
};
