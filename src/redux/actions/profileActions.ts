import { profile } from '../actions/actionTypes';

export const applyChanges = data => {
  return {
    type: profile.APPLY_CHANGES,
    payload: data,
  };
};

export const deleteProfileData = () => {
  return {
    type: profile.DELETE_PROFILE_DATA,
  };
};
