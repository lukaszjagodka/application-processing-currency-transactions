/* eslint-disable no-case-declarations */
import { TAccount, TAction } from './types/types';

const initialState = {
  course: 4.60,
};

const accountReducer = (state: TAccount = initialState, action: TAction) => {
  switch (action.type) {
    case 'UPDATE_COURSE':
      const roundedCourse = Math.round(action.payload * 100) / 100;
      return {
        ...state,
        course: roundedCourse,
      };
    default:
      return state;
  }
};

export default accountReducer;
