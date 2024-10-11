import axios from 'axios';

export const fetchCountry = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
};