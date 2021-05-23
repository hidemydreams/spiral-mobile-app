import { profile } from '../actions/actionTypes';

export const applyChanges = (profileName: string, profileDate: string) => {
  return {
    type: profile.APPLY_CHANGES,
    payload: {
      profileName,
      profileDate,
    },
  };
};

export const deleteProfileData = () => {
  return {
    type: profile.DELETE_PROFILE_DATA,
  };
};
