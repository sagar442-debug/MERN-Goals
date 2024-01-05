import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) =>{
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    try {
        localStorage.removeItem('user');
        // Additional cleanup or redirection logic if needed
      } catch (error) {
        console.error('Error during logout:', error);
      }
  }

// Login User
const login = async (userData) =>{
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


const authService = {
    register,
    logout,
    login
}

export default authService;