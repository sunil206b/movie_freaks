import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import API from '../../API';
import NoImage from '../../images/no_image.jpg';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import HeroImage from '../hero/HeroImage';

export default function Home() {
    const {state, loading, error} = useHomeFetch();
    return (
        <>
            {state.results[0] && 
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            } 
        </> 
    )
}
