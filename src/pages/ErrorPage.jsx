import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <div className='w-[90%] m-auto'>
            <Navbar></Navbar>
            <h1>Error</h1>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;