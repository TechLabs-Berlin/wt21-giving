import React from 'react';
import React, { useState } from 'react';

function FilterSearch() {
    const [query, setSearchQuery] = useState('categorie');
    const [searchQuery, setSearchQueryResults] = useState([]);
    const [search, setSearch] = useState('');
    const doSearch = () => {
        search('query')
    }
    console.log('Search by name')
    return (
        <>
            <div className="SearchBar">
                <input
                    onChange={event => setSearchName(event.target.value)}
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    value={'Search organisation by name'}
                    
                />
            </div>
        </>
    );
};

export default FilterSearch;