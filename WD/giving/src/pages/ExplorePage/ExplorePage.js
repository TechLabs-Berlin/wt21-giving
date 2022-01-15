import React from 'react';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/search'

const Explore = () => {
    return (
        <div className='ExplorePage'>
            <Link to={`/signup`}>
                <Header />
                <Search />
            </Link>
            < br />
            <h3>Results</h3>
            
            return (
            <div>
                <ul>
                    {organisation.map((name) => (
                        <li key={name.id}>{organisation.name}</li>
                    ))}
                </ul>
            </div>
            );
        </div>
    );
}     

export default Explore