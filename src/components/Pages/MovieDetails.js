import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../Style/MovieDetails.css'
import MovieModal from './MovieModal';
const MovieDetails = () => {
    const [modalShow, setModalShow] = useState(false);
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
            setMovie(data)
        })()
    }, [])
    const { genres, language, name, rating, image, premiered, summary } = movie || {}
    console.log(movie)
    return (
        <div className='mt-5 pt-5 mb-5 sm-px-4'>
            <Container>
                <Row>
                    <Col className='px-0' md={4} >
                        <div>
                            <img className='img-fluid' src={image?.original} alt="" />
                        </div>
                    </Col>
                    <Col className='px-0' md={8}>
                        <div className='movie-card-details p-3 mt-sm-5 mt-md-0'>
                            <div className='text-white'>
                                <h2 className='fw-bold display-6 mb-3'>{name}</h2>
                                <p className='fw-bold'>Genre: <span className='movie-time'>{genres?.length && genres[0]}</span></p>
                                <p className='fw-bold'>Release: <span className='movie-time'>{premiered}</span></p>
                                <p className='fw-bold'>Language: <span className='movie-time'>{language}</span></p>
                                <p className='fw-bold'>IMDB Rating: <span className='movie-time'>{rating?.average}</span></p>
                            </div>

                        </div>
                        <div className='px-3'>
                            <div className='divider'></div>
                        </div>
                        <div className='mt-5 ps-4'>
                            <h1 className='summery fs-3'>Summary</h1>
                            <p className='summary'>{
                                summary?.split('</p>').join('')?.slice(3, summary?.length).split('<b>').join('').split('</b>').join('')
                            }</p>
                            <button onClick={()=>setModalShow(true)} className='rounded-pill mt-3 px-4 py-2 text-uppercase text-white fw-bold  r-btn b-0'>Book Now</button>
                        </div>
                    </Col>
                </Row>
            </Container>


            <MovieModal
            show={modalShow}
            onHide={()=>setModalShow(false)}
            movie={movie}
            />
        </div>
    );
};

export default MovieDetails;