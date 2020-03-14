import { SET_DEVICE_ID } from "redux/constants/setDeviceId.constant";

export const setDeviceId = (payload: string | null) => {
  return { type: SET_DEVICE_ID, payload };
};
