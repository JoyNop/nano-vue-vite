export interface User {
  address: string;
  avatar: string;
  dueDays: string;
  dueTime: string;
  email: null;
  id: number;
  nickname: string;
  orgId: number;
  orgName: string;
  parentId: number;
  permList: any[];
  phone: string;
  roleList: any[];
  state: 0 | 1 | 2;
}

export interface Org {
  dueTime: string;
  id: number;
  maxNumber: number;
  name: string;
  nickName: string;
  orgUserList: any[];
  phone: string;
  state: number;
  userId: number;
}
