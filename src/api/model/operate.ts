export interface LogRecord {
  createDate: string;
  id: number;
  ip: string;
  method: string;
  operation: string;
  params: string;
  time: number;
  userId: number;
}

export interface AppVersion {
  appName: string;
  createTime: string;
  creatorId: number;
  downloadUrl: string;
  fileName: string;
  fileSize: string;
  id: number;
  isForce: number;
  isIgnorable: number;
  isSilent: number;
  md5Value: string;
  packageName: string;
  updateContent: string;
  updateTime: string;
  updaterId: number;
  versionCode: number;
  versionName: string;
}
