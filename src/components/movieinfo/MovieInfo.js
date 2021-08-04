import React from 'react';
import PropTypes from "prop-types";
import Thumb from "../thumb/Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import { Wrapper, Content, Text } from "./MovieInfo.styles";

export default function MovieInfo({movie}) {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb 
                    image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` 
                    : NoImage} clickable={false} alt='movie-thumb'>
                </Thumb>
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>

                        <div className='directors'>
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map((director) => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object,
}