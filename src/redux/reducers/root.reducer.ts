import { SET_TOKEN } from "redux/constants/setToken.constant";

export interface IState {
  token: string | null;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  token: null
};

export const rootReducer = (state = initialState, action: IAction) => {
  if (action.type === SET_TOKEN) {
    return { ...state, token: action.payload };
  }
  return state;
};
