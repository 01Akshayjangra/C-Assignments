import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Login from '../authentication/Login';

const ProtectedRoute = ({ Component }) => {

    const accessToken = localStorage.getItem("token-task");

    return accessToken ? (
        Component === Login ? (
            <div className='notFound'>
                <div>
                    <div>
                        <h1>You are already Logged in</h1>
                        <Link to='/'>Return to <span>Dashboard</span></Link>
                    </div>
                </div>
            </div>
        ) : (
            <Component />
        )
    ) : (
    <>
        <Login />
        <Navigate to="/login" />
    </>
    );
};

export default ProtectedRoute;
