import React from 'react';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import FilterSearch from '../../components/research/FilterSearch/FilterSearch';
import SearchList from '../../components/research/SearchList';
import Filter from '../../components/research/filter/Filter'
import './ExplorePage.css';

const Explore =() => {
return (
    <div className='ExplorePage'>
        <div className='header-explore'>
            <Header />
        </div>
    <div className='Searchbar'>

    <div className='Filter'>
      <Link to={`/filterpage`}>
        <Filter />
      </Link>
      </div>
      

      <FilterSearch />
      </div>
  
    
    <div className='Results'>
      <SearchList />
    </div>
    
    </div>  
    );
}

export default Explore;