import React from 'react';
import { Link } from 'react-router-dom';
import "./CarItem.css"

const CarItem = ({ car }) => {
   
    const role = localStorage.getItem("jwtid");

    return (
        <div className='car-item'>
          
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <Link to={`/cars/${car.id}`}>Details</Link>

           { (role==="ROLE_admin" || role==="admin") && <Link to={`/edit-car/${car.id}`}>Edit</Link>}
           { (role==="ROLE_admin" || role==="admin") && <Link to={`/delete-car/${car.id}`}>Delete</Link>}
        </div>
    );
};

export default CarItem;
