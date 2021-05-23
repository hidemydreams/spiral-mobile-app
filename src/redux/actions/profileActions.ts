import { profile } from '../actions/actionTypes';

export const applyChanges = (profileName: string, profileDate: string) => {
  console.log('hello from apply changes action');
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
