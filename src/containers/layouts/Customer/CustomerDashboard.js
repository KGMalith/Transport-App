import React from 'react';
import Nav from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';


export default ({ children }) => {

    return (
        <div>
            <Nav />
            {children}
            <Footer/>
        </div>
    )
}
