import React from 'react'
import Carousel from "react-material-ui-carousel"
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import "./Hero.css"
import { Link, useNavigate } from 'react-router-dom';

const Hero = ({movies}) => {
    const navigate = useNavigate();

    const review = (movieId)=>{
            navigate(`/reviews/${movieId}`);
        }
  return (
    <div className='movie-carousel-container bg-black h-screen'>
        {movies && movies.length > 0 &&(
      <Carousel>
        {
            movies.map((movie)=>{
                return(
                    <Paper key={movie.imdbId}>
                        <div className='movie-card-container'>
                            <div className='movie-card' style={{"--img":`url(${movie.backdrops[0]})`}}>
                                <div className='movie-detail'>
                                    <div className='movie-poster'>
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className='movie-title'>
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className='movie-buttons-container'>
                                        <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                        <div className='play-button-icon-container'>
                                            <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay}/>
                                        </div>
                                        </Link>
                                        <div className="movie-review-button-container">
                                            <button className='bg-gold font-oswald rounded-md text-bold px-5 py-2 hover:scale-125 transiton duration-300 hover:bg-white'variant ="info" onClick={(movieId) => review(movie.imdbId)} >Reviews</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>)}
    </div>
  )
}

export default Hero
