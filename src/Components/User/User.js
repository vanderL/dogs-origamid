import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import Head from '../../Helper/Head';
import NotFound from '../NotFound';
import { useSelector } from 'react-redux';

const User = () => {

    const {data} = useSelector(state => state.user);
    console.log(data)

    return (
        <section className="container">
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id}/>} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
                <Route path ='*' element={<NotFound />} />

            </Routes>
        </section>
    )
}

export default User;