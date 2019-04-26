import { SET_TOKEN } from "redux/constants/setToken.constant";

export const setToken = (payload: string | null) => {
  return { type: SET_TOKEN, payload };
};
