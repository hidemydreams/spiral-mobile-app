import { AnyAction } from 'redux';
import { profile } from '../actions/actionTypes';

interface IProfileInitialState {
  fullName: string;
  dateOfBirth: string;
  photo: object | null;
}

const profileInitialState: IProfileInitialState = {
  fullName: 'Name Surname',
  dateOfBirth: 'Please select your date of birth',
  photo: null,
};

const profileReducer = (state = profileInitialState, action: AnyAction) => {
  switch (action.type) {
    case profile.CHANGE_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    case profile.CHANGE_PHOTO:
      return {
        ...state,
        photo: action.payload,
      };
    case profile.CHANGE_DATE:
      return {
        ...state,
        dateOfBirth: action.payload,
      };
    case profile.DELETE_PROFILE_DATA:
      return {
        fullName: 'Name Surname',
        dateOfBirth: 'Please select your date of birth',
        photo: null,
      };
    case profile.APPLY_CHANGES:
      return {
        fullName: action.payload.profileName,
        dateOfBirth: action.payload.profileDate,
        photo: action.payload.profileImage,
      };

    default:
      return state;
  }
};

export default profileReducer;
