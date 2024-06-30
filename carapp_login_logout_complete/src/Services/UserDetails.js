import axios from 'axios';

const USER_URL = 'http://localhost:8080/api';


async function getUserById(id) {
    try {
      const response = await axios.get(`${USER_URL}/user/${id}`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; 
    }
  }

  async function getAllUsers() {
    try {
      const response = await axios.get(`${USER_URL}/users`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; 
    }
  }




export default {
    getUserById,
    getAllUsers
}