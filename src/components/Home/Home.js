import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Pages/Banner';
import TopRatingMovie from '../Pages/TopRatingMovie';
// background-color: #2f3946;
const Home = () => {
    return (
        <div>
            <Banner />
            <TopRatingMovie/>
         
        </div>
    );
};

export default Home;