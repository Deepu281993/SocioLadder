import {
  COUNTRY_FETCHING,
  COUNTRY_FETCHING_SUCCESS,
  COUNTRY_FETCHING_FAILURE,
} from '@redux/types';

const initialState = {
  countriesSuccess: false,
  countriesError: false,
  countriesData: [],
  countriesVersion: 0,
  isFetching: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTRY_FETCHING:
      return {
        ...state,
        countriesData: [],
        isFetching: true,
      };
    case COUNTRY_FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        countriesSuccess: true,
        countriesData: action.data,
        countriesVersion: ++state.countriesVersion,
      };
    case COUNTRY_FETCHING_FAILURE:
      return {
        ...state,
        isFetching: false,
        countriesError: true,
      };

    default:
      return state;
  }
}
