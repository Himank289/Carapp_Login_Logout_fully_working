import React ,{useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import carService from '../Services/CarService';
import './DeleteCar.css'

const DeleteCar = () => {

    const { id } = useParams();
    const navigate=useNavigate();
    const [car, setCar] = useState(null);

    useEffect(() => {
        carService.getCarById(id).then(response => {
            setCar(response.data); 
        });
    }, [id]);


    const handleDelete = () => {
        carService.deleteCar(id).then(() => {
            navigate('/');
        });
    };

    if (!car) {
        return <div>Loading...</div>;
    }
  return (
    <div>
         <div className='delete-car-container'>
            <h1>Do You Really Wish to Delete the  Car</h1>
          
            <button className='delete-car-button'onClick={handleDelete}>Delete Car</button>
        </div>
      
    </div>
  )
}

export default DeleteCar
