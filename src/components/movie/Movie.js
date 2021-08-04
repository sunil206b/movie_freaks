import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import Grid from "../grid/Grid";
import Spinner from "../spinner/Spinner";
import NoImage from "../../images/no_image.jpg";
import { useMovieFetch } from "../../hooks/useMovieFetch";
import BreadCrumb from '../breadcrumb/BreadCrumb';
import MovieInfo from '../movieinfo/MovieInfo';
import MovieInfoBar from '../movieinfobar/MovieInfoBar';
import Actor from '../actor/Actor';

export default function Movie() {
    const {movieId} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div>Something went wrong...</div>
    }

    return (
        <Fragment>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} 
            revenue={movie.revenue} />
            <Grid header='Actors'>
                {movie.actors.map((actor) => (
                    <Actor key={actor.credit_id} name={actor.name} 
                    character={actor.character} 
                    imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage} />
                ))}
            </Grid>
        </Fragment>
    )
}
