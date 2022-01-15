import React, { Component } from 'react';
import useState from 'react-hook-use-state';
import { HiOutlineAdjustments } from 'react-icons'

export default function search() {
    const [query, setSearchQuery] = useState('categorie');
    const [searchQuery, setSearchQueryResults] = useState([]);
    const [search, setSearch] = useState('');
    const doSearch = () => {
        search('query')
    }

    const search = () => (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search name, categorie</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search name, categorie"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );

    const filter = () => {
        return (
            <div id='adjustment'>
                <div className='adjustment'>
                    <HiOutlineAdjustments size="30px" />
                </div>
              </div>
        );
    };

}

export default search