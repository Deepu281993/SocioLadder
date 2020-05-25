import {
  RESTAURANTS_FETCHING,
  RESTAURANTS_FETCHING_SUCCESS,
  RESTAURANTS_FETCHING_FAILURE,
} from '@redux/types';
import {IMG1, IMG2, IMG3, IMG4, IMG5, IMG6} from '../../assets/img';

//Static Restaurants Data
const RestaurantsData = [
  {
    image: IMG1,
    restaurantName: 'Jumeirah Darbar',
    dish: 'Chinese, North Indian, Mughlai, Fast Food, Desserts',
    rupees: '200 for One Person',
    mins: '32',
    address: 'Goregaon West',
    offers: '20% off up to ₹50 on orders above ₹129 | use coupon SWIGGYIT',
  },
  {
    image: IMG2,
    restaurantName: 'Subway',
    dish: 'Quick Bites - Sandwich, Fast Food, Healthy Food, Salad',
    rupees: '400 for Two Person',
    mins: '30',
    address: 'Malad West',
    offers: '20% off up to ₹50 on orders above ₹129 | use coupon SWIGGYIT',
  },
  {
    image: IMG3,
    restaurantName: 'Aalishaan Darbar',
    dish: 'Chinese, Mughlai, North Indian, Biryani Fast Food, Desserts',
    rupees: '500 for Two Person',
    mins: '45',
    address: 'Andheri West',
    offers: '20% off up to ₹50 on orders above ₹129 | use coupon SWIGGYIT',
  },
  {
    image: IMG4,
    restaurantName: 'Kebab Ji',
    dish: 'Mughlai, Wraps, Lebanese, Kebab, North Indian, Salad',
    rupees: '300 for One Person',
    mins: '20',
    address: 'Bandra East',
    offers: '20% off up to ₹50 on orders above ₹129 | use coupon SWIGGYIT',
  },
  {
    image: IMG5,
    restaurantName: 'Bawarchikhana',
    dish: 'Mughlai, North Indian, Biryani',
    rupees: '250 for One Person',
    mins: '25',
    address: 'Lower Parel East',
    offers: '20% off up to ₹50 on orders above ₹129 | use coupon SWIGGYIT',
  },
  {
    image: IMG6,
    restaurantName: 'The Secret Kitchen',
    dish: 'Fast Food, Pizza, Desserts',
    rupees: '500 for Two Person',
    mins: '50',
    address: 'Goregaon East',
    offers: '20% off up to ₹50 on orders above ₹129 | use coupon SWIGGYIT',
  },
];
export function showLoadingIndicator() {
  return {
    type: RESTAURANTS_FETCHING,
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

export function fetchAllRestaurants() {
  return dispatch => {
    dispatch(onSuccess(RestaurantsData, RESTAURANTS_FETCHING_SUCCESS));
  };
}
