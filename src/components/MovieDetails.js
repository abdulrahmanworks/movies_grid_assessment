import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

function MovieDetails() {
    const key = '';
    let { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({})
    
    useEffect(() => {
        getMoviesDetails();
    }, []);

    const getMoviesDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`).then(resp => {
            setMovieDetail(resp.data)
        })
    }

  return (
    <div>
        {!!movieDetail && (
        <main>
            <div className="movie-title bg-primary py-3">
                <div className="container">
                    <h1>{movieDetail.original_title}</h1>
                </div>
            </div>
            <div className="movie-details-wrapper">
                <div className="container">
                    <div className="movie-meta d-flex">
                        <div className="movie-poster">
                            <img src={`https://image.tmdb.org/t/p/w185/${movieDetail.poster_path}`} alt={movieDetail.original_title} />
                        </div>
                        <div className="movie-description flex-fill ps-3">
                            <p className="movie-meta__year">{new Date(movieDetail.release_date).getFullYear()}</p>
                            <p className="movie-meta__duration mb-4">{movieDetail.runtime} mins</p>
                            <p className="movie-meta__rating mb-3">{movieDetail.vote_average}/10</p>
                            <div className="btn-wrapper">
                                <a href="#" className="btn btn-brown d-block">Add to Favorite</a>
                            </div>
                        </div>
                    </div>
                    <p className="movie-bio my-4">{movieDetail.overview}</p>

                    <div className="movie-trailers">
                        <h3>TRAILERS</h3>
                        <ul className="trailers-list">
                            <li>
                                <a href="#">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
                                            stroke="#746A64" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 10L18 14L12 18V10Z" stroke="#746A64" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Play trailer 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
                                            stroke="#746A64" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 10L18 14L12 18V10Z" stroke="#746A64" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Play trailer 2
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        )}
    </div>

  );
}

export default MovieDetails;
