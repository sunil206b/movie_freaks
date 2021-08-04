import React, { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";
import searchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchBar.styles";

export default function SearchBar({ setSearchTerm }) {

    const [search, setSearch] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(search);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, search]);
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type='text' placeholder='Search Movie' 
                onChange={(e) => setSearch(e.target.value)} value={search} />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTyeps = {
    setSearchTerm: PropTypes.func,
}