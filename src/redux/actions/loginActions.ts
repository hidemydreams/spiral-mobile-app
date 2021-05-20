import { auth } from '../actions/actionTypes';

const login = () => {
  return {
    type: auth.LOGIN,
  };
};

const loginSuccess = (username: string, password: string) => {
  return {
    type: auth.LOGIN_SUCCESS,
    payload: 'ANYJWTTOKEN',
  };
};

const loginFailure = () => {
  return {
    type: auth.LOGIN_FAILURE,
    payload: 'Please enter correct email and password',
  };
};

export const logout = () => {
  return {
    type: auth.LOGOUT,
  };
};

export const signIn = (username: string, password: string) => {
  return function (dispatch: any) {
    return new Promise((resolve, reject) => {
      dispatch(login());
      const re = /^[\w.+\-]+@itechart-group\.com$/;
      const isValid = re.test(username) && password === 'admin';
      setTimeout(() => {
        isValid ? resolve('Successfull Login') : reject();
      }, 1000);
    })
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  };
};
