import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogImg, TMDBLogoImg } from './Header.styles';

export default function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
}
