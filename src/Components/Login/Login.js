import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { UserContext } from '../../Context/UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
    const {login} = React.useContext(UserContext);

    if(login === true) return <Navigate to="/conta" />

    return <div>
        <Routes>
            <Route path="/" exact element={<LoginForm />}/>
            <Route path="criar" element={<LoginCreate />}/>
            <Route path="perdeu" element={<LoginPasswordLost />}/>
            <Route path="reset" element={<LoginPasswordReset />}/>

        </Routes>
    </div>
}

export default Login;