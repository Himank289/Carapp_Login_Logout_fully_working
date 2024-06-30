import React from 'react'
import { Routes,  Route } from 'react-router-dom';
import Home from '../Pages/Home';
import CarDetails from '../Pages/CarDetails';
import AddCar from '../Pages/AddCar';
import EditCar from '../Pages/EditCar';
import LoginPage from '../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage';
import Logout from '../Authentication/Logout';
import ProtectedRoute from './ProtectedRoute';
import DeleteCar from '../Pages/DeleteCar';
import ProtectedRouteRoles from './ProtectedRouteRoles';

const Routing = () => {
  return (
    <>
           <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route element={<ProtectedRoute />}>
                        <Route path="/cars/:id" element={<CarDetails />} />
                        <Route path="/logout" element={<Logout />} />
                       </Route>
                       <Route element={<ProtectedRouteRoles />}>
                       <Route  path='/add-car' element={<AddCar/>} />
                       <Route  path='/edit-car/:id' element={<EditCar/>} />
                       <Route  path='/delete-car/:id' element={<DeleteCar/>} />
                       </Route>
                    </Routes>
                    
    
    
    </>
      
   
  )
}

export default Routing
