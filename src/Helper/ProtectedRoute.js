import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';


const ProtectedRouter = (props) => {
    const {data} = useSelector(state => state.user);

    if(data === true) return <Route {...props} />
    else if (data === false) return <Navigate to="/login" />
    else return null;
}

export default ProtectedRouter;