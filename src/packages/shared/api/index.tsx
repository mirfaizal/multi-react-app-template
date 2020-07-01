import axios from 'axios';

export async function getCovidInfo() {
  return axios.get(`https://api.covid19api.com/summary`);
}
