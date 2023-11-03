import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div>
                <div>
                    {/* <DoNotDisturbAltIcon sx={{fontSize: '5rem'}}/> */}
                </div>
                <div>
                    <h1>404 | Page Not Found</h1>
                    <p>The requested page does not exist.</p>
                    <Link to='/'>Return to <span>Dashboard</span></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
