import { AnyAction } from 'redux';
import { auth } from '../actions/actionTypes';

interface IAuthInitialState {
  JWT_TOKEN: null | string;
  authError: string;
  loading: boolean;
}

const authInitialState: IAuthInitialState = {
  JWT_TOKEN: null,
  authError: '',
  loading: false,
};

const loginReducer = (state = authInitialState, action: AnyAction) => {
  switch (action.type) {
    case auth.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case auth.LOGIN_SUCCESS:
      return {
        loading: false,
        JWT_TOKEN: action.payload,
        authError: '',
      };
    case auth.LOGIN_FAILURE:
      return {
        loading: false,
        JWT_TOKEN: '',
        authError: action.payload,
      };
    case auth.LOGOUT:
      return {
        loading: false,
        JWT_TOKEN: '',
        authError: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
