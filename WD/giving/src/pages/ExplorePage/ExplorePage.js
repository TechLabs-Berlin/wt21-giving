import React from 'react';
import Filter from '../../components/research/filter/Filter';

import FilterSearch from '../../components/research/FilterSearch/FilterSearch';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <div className='ExplorePage'>
            <Link to={`/signup`}>
                <Header />
                <Filter />
                <FilterSearch />
                <searchField />
            </Link>
            < br />
            <h3>Results</h3>
        </div>  
    );
}     

export default Explore;