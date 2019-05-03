import { SET_TOKEN } from "redux/constants/setToken.constant";
import { SET_DEVICE_ID } from "redux/constants/setDeviceId.constant";

export interface IState {
  token: string | null;
  device_id: string | null;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  token: null,
  device_id: null
};

export const rootReducer = (state = initialState, action: IAction) => {
  if (action.type === SET_TOKEN) {
    return { ...state, token: action.payload };
  }
  if (action.type === SET_DEVICE_ID) {
    return { ...state, device_id: action.payload };
  }
  return state;
};
