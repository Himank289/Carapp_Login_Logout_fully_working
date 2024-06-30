import axios from "axios";
import {jwtDecode} from "jwt-decode";

const API_URL = 'http://localhost:8080';


axios.defaults.headers.common['Content-Type'] = 'application/json';

export async function signup(user) {
    const body = new FormData();
    body.append("name", user.name);
    body.append("email", user.email);
    body.append("password", user.password);
    body.append("role", user.role);

 
    
    const { data } = await axios.post(`${API_URL}/auth/signup`, body);
    
    localStorage.setItem("jwt", data.jwt);
    localStorage.setItem("jwtid",data.user.role);
}



export async function login(u) {
  try {
    const { data } = await axios.post(`${API_URL}/auth/signin`, u);

    localStorage.setItem("jwt", data.jwt);

    localStorage.setItem("jwtid",data.user.role)
  } catch (error) {
    console.error('Error occurred during login:', error);
    throw error; 
  }
}


export function logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwtid");
    
}

export function getUser() {
    try {
        const jwt = localStorage.getItem("jwt");
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem("jwt");
}