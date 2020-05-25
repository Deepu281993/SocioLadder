import {
  RESTAURANTS_FETCHING,
  RESTAURANTS_FETCHING_SUCCESS,
  RESTAURANTS_FETCHING_FAILURE,
} from '@redux/types';

const initialState = {
  restaurantsSuccess: false,
  restaurantsError: false,
  restaurantsData: [],
  restaurantsVersion: 0,
  isFetching: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case RESTAURANTS_FETCHING:
      return {
        ...state,
        restaurantsData: [],
        isFetching: true,
      };
    case RESTAURANTS_FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        restaurantsSuccess: true,
        restaurantsData: action.data,
        restaurantsVersion: ++state.restaurantsVersion,
      };
    case RESTAURANTS_FETCHING_FAILURE:
      return {
        ...state,
        isFetching: false,
        restaurantsError: true,
      };

    default:
      return state;
  }
}
