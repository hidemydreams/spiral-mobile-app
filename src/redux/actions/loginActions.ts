import { auth } from '../actions/actionTypes';

export const login = () => {
  return {
    typs: auth.LOGIN,
  };
};

export const logout = () => {
  return {
    typs: auth.LOGOUT,
  };
};
