import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';
import NotFound from '../NotFound';
import { useSelector } from 'react-redux';
import Loading from '../../Helper/Loading';

const Login = () => {
    const {data, loading} = useSelector(state => state.user)

    if(loading) return <Loading />
    if(data) return <Navigate to="/conta" />

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" exact element={<LoginForm />}/>
                    <Route path="criar" element={<LoginCreate />}/>
                    <Route path="perdeu" element={<LoginPasswordLost />}/>
                    <Route path="resetar" element={<LoginPasswordReset />}/>
                    <Route path ='*' element={<NotFound />} />
                </Routes>
            </div>
        </section>
    ) 
}

export default Login;