import axios from 'axios';
import { setCampers } from './campersSlice';

export const fetchCampers = () => async dispatch => {
  try {
    const response = await axios.get('https://64a3a8f2c3b509573b5660c3.mockapi.io/adverts');
    dispatch(setCampers(response.data));
  } catch (error) {
    console.error('Error fetching campers:', error);
  }
};

