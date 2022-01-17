import React from 'react';

const search = () => (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Name, categorie</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Name, categorie"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );

export default search;