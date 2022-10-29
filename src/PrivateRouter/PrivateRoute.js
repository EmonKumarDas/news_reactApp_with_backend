import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {User} = useContext(userContext);
    const location = useLocation();
   if(!User){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children;
};

export default PrivateRoute;