import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;