import axios from 'axios';

const API_URL = 'http://localhost:8080/cars';

const getAllCars = () => {
    return axios.get(`${API_URL}/`);
};

const getCarById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createCar = (car) => {
    return axios.post(`${API_URL}/`, car);
};

const updateCar = (id, car) => {
    return axios.put(`${API_URL}/${id}`, car);
};

const deleteCar = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
};