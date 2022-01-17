import React from 'react';
import React, { useState } from 'react';

function FilterSearch() {
    const [query, setSearchQuery] = useState('categorie');
    const [searchQuery, setSearchQueryResults] = useState([]);
    const [search, setSearch] = useState('');
    const doSearch = () => {
        search('query')
    }
}

export default FilterSearch;