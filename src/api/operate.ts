import axios from "@/utils/http";
import { setObjToUrlParams } from "@/utils";

export const getOperateUser = (query: any) => {
  const url = "/admin/operate/user";
  const queryUrl = setObjToUrlParams(url, query);
  return axios.get(queryUrl);
};

export const deleteOperateUser = (id: number) => {
  return axios.delete(`/admin/operate/user/${id}`);
};
export const addOperateUser = (body: any) => {
  return axios.post(`/admin/operate/user`, body);
};
export const getSysLog = (query: any) => {
  const url = "/admin/log/list";
  const queryUrl = setObjToUrlParams(url, query);
  return axios.get(queryUrl);
};

export const getApkVersion = () => {
  return axios.get(`/admin/apk_version/list`);
};
export const uploadFile = () => {
  const baseUrl = import.meta.env?.VITE_GLOB_UPLOAD_URL;
  console.log(import.meta.env.VITE_GLOB_UPLOAD_URL);

  const url = `${baseUrl}/oss/file/upload`;
  console.log(url);

  return url;
};

export const createNewApkVersion = (body: any) => {
  return axios.post(`/admin/apk_version/save`, body);
};

export const deleteApkVersion = (id: any) => {
  return axios.delete(`/admin/apk_version/delete/${id}`);
};
