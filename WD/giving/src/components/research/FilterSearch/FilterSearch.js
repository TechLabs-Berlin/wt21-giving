import React, { useState } from 'react';

function FilterSearch(props) {

    
    const [name, setSearchName] = useState('name');
    const [searchName, setSearchNameResults] = useState([]);
    const [search, setSearch] = useState('');
    const doSearch = () => {
        search('name')
    }
    return (
        <>
            <div className="SearchBar">
                <input
                    onChange={event => setSearchName(event.target.value)}
                    type="text"
                    name="searchBar"
                    id="searchBar"
                />
            </div>
        </>
    );
};

export default FilterSearch;