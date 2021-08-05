import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogImg, TMDBLogoImg } from './Header.styles';

import { Context } from "../../context";

export default function Header() {
    const [user, setUser] = useContext(Context);
    const location = useLocation();
    
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                {user ? (
                    <Link to={`${location.pathname}`} onClick={handleLogout}>
                        <span>Log Out</span>
                    </Link>
                ): (
                    <Link to='/login'>
                        <span>Log In</span>
                    </Link>
                )}
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
}
