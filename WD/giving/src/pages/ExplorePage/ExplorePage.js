import React from 'react';
import Header from '../../components/header/header';
import FilterSearch from '../../components/research/FilterSearch/FilterSearch';
import SearchList from '../../components/research/SearchList/SearchList';
import './ExplorePage.css';

const Explore =() => {
return (
    <div className='ExplorePage'>
        <div className='header-explore'>
            <Header />
    </div>
    
    <div className='Searchbar'>
      <FilterSearch />
      </div>
  
    
    <div className='Results'>
      <SearchList />
    </div>
    
    </div>  
    );
}

export default Explore;