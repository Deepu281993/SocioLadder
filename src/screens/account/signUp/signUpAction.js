import {
  COUNTRY_FETCHING,
  COUNTRY_FETCHING_SUCCESS,
  COUNTRY_FETCHING_FAILURE,
} from '@redux/types';

//Static Data Country
const CountriesData = [
  {
    id: 1,
    name: 'India',
  },
  {
    id: 2,
    name: 'Canada',
  },
  {
    id: 3,
    name: 'China',
  },
  {
    id: 4,
    name: 'Sri Lanka',
  },
  {
    id: 5,
    name: 'Syria',
  },
  {
    id: 6,
    name: 'Iran',
  },
  {
    id: 7,
    name: 'Italy',
  },
  {
    id: 8,
    name: 'England',
  },
  {
    id: 9,
    name: 'Japan',
  },
  {
    id: 10,
    name: 'Turkey',
  },
  {
    id: 11,
    name: 'Sweden',
  },
  {
    id: 12,
    name: 'Greece',
  },
];
export function showLoadingIndicator() {
  return {
    type: COUNTRY_FETCHING,
  };
}

export function onSuccess(data, type) {
  return {
    type: type,
    data,
  };
}

export function onFailure(error, type) {
  return {
    type: type,
    error,
  };
}

export function fetchAllCountries() {
  return dispatch => {
    dispatch(onSuccess(CountriesData, COUNTRY_FETCHING_SUCCESS));
  };
}
