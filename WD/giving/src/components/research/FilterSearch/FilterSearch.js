import React, { useState } from 'react';
import firebase from 'firebase';
import { BsSearch } from "react-icons/bs"
import SearchList from '../SearchList';
import Scroll from '../scroll';

function FilterSearch({ details }) {

    const [name, setName] = useState('name');
    const [searchShow, setSearchShow] = useState(false);
    
const filteredName = details.filter(
        organisation => {
          return (
            organisation
            .name
            .toLowerCase()
            .includes(name.toLowerCase()) ||
            organisation
            .description
            .toLowerCase()
            .includes(name.toLowerCase())
          );
        }
      );

    const handleChange = e => {
        setName(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
          }
        };
    
        function searchList() {
            if (searchShow) {
                return (
                    <Scroll>
                        <SearchList filteredName={filteredName} />
                    </Scroll>
                );
            }
        }

    
      
    return (
        <>
            <div className="SearchBar">
                <input
                    onChange={event => setName(event.target.value)}
                    type="text"
                    name="searchBar"
                    value={name}
                    id="searchBar"
                    onChange = {handleChange}
                    className="textfield"
                    size="medium"
                />
                <br></br>
                <BsSearch />
            </div>
            <div className>
            <section className='cards'>
            {searchList()}
                        </section>
            </div>
        </>
    );
};

export default FilterSearch;