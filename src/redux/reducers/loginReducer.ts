import { auth } from '../actions/actionTypes';

const initialState = {
  JWT_TOKEN: null,
  authError: null,
  loading: false,
};

interface IAction {
  type: string;
  payload: Object;
}

const loginReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case auth.LOGIN:
      return {
        ...state,
        JWT_TOKEN: true,
      };

    case auth.LOGIN:
      return state;

    default:
      return state;
  }
};

export default loginReducer;
