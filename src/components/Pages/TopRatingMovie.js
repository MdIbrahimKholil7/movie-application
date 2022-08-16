import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import '../Style/TopRatingMovie.css'
import MovieCard from './MovieCard';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopRatingMovie = () => {

    const [movies, setMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState(0)

    // fetching data 
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=all`)
            setMovies(data)
        })()
    }, [])

    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 3,
        centerMode: true,
        speed: 1000,
        centerPadding: 0,
        beforeChange: (current, next) => setMovieIndex(next),
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className='movie-container'>
            <Container>
                <div>
                    <div className='d-flex align-items-center'>
                        <div className='top-box ps-3 text-white py-2'>
                            <h1 className='fs-4'>Top Rating</h1>
                            <p className='fs-6'>Suggested Movies</p>
                        </div>
                    </div>
                    {/* movie slider  */}
                    <div className='pt-5 pb-5'>
                        <Slider {...settings}>
                            {
                                movies.map((movie,index)=><MovieCard
                                movie={movie}
                                index={index}
                                movieIndex={movieIndex}

                                />)
                            }
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopRatingMovie;