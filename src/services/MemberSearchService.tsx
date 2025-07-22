import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
  });

  export const getAllMembers = async () => {
    try {
      const response = await instance.get('/members/search/all');
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };


  export const getMembersById = async (id:string) => {
    try {
      const response = await instance.get('/members/search/'+ id);
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };