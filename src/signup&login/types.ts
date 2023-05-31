import { UserCtxState } from "../shared/types/types";

export interface Button {
  action?: string;
}
export interface register {
  accessToken: string;
  user: UserCtxState;
}
