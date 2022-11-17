import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../Firebase/Firebase.config';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div>..loading</div>;
    }
    if(user && user.uid){
        return children

    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;