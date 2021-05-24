import { profile } from '../actions/actionTypes';

export const applyChanges = (
  profileName: string,
  profileDate: string,
  profileImage: object,
) => {
  return {
    type: profile.APPLY_CHANGES,
    payload: {
      profileName,
      profileDate,
      profileImage,
    },
  };
};

export const deleteProfileData = () => {
  return {
    type: profile.DELETE_PROFILE_DATA,
  };
};
