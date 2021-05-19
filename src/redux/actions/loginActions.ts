import { auth } from '../actions/actionTypes';

const login = () => {
  return {
    type: auth.LOGIN,
  };
};

const loginSuccess = () => {
  return {
    type: auth.LOGIN_SUCCESS,
    payload: 'some jwt token',
  };
};

const loginFailure = () => {
  return {
    type: auth.LOGIN_FAILURE,
    payload: 'error message',
  };
};

export const logout = () => {
  return {
    type: auth.LOGOUT,
  };
};

export const signIn = (username: string, password: string) => {
  return function (dispatch: any) {
    return new Promise(resolve => {
      dispatch(login());
      setTimeout(() => {
        resolve();
      }, 1000);
    })
      .then(result => {
        dispatch(loginSuccess());
      })
      .catch(err => {
        dispatch(loginFailure());
      });
  };
};
