import { AnyAction } from 'redux';
import { profile } from '../actions/actionTypes';

interface IProfileInitialState {
  fullName: string;
  dateOfBirth: string;
  photo: string;
}

const profileInitialState: IProfileInitialState = {
  fullName: 'Initial Name',
  dateOfBirth: 'Please select your date of birth',
  photo: 'base 64 photo',
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
        fullName: 'Initial Name',
        dateOfBirth: 'Please select your date of birth',
        photo: 'base 64 photo',
      };
    case profile.APPLY_CHANGES:
      return {
        fullName: action.payload.fullName,
        dateOfBirth: action.payload.dateOfBirth,
        photo: action.payload.photo,
      };

    default:
      return state;
  }
};

export default profileReducer;
