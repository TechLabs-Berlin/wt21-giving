import React, { useState, useEffect } from 'react';
import firebase from '../../../Firebase';
import SearchList from '../SearchList';
import './FilterSearch.css'
import { BsSearch } from 'react-icons/bs';

function FilterSearch() {
  const [OrganisationList, setOrganisationList] = useState({});
  const [NameList, setNameList] = useState()
  const [searchShow, setSearchShow] = useState(false);
  const [FilteredOrganisationList, setFilteredOrganisationList] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    const ref = dbRef.child('organisationList');
    ref.on('value', (snapshot) => {
      const snapshotValue = snapshot.val()
      console.log(snapshotValue)
      setOrganisationList(snapshotValue)
      setFilteredOrganisationList(Object.values(snapshotValue))
    });
  } , [])

  const handleChange = e => {
    setNameList(e.target.value);
    setFilteredOrganisationList(Object.values(OrganisationList).filter(organisation => organisation.name.toLowerCase().includes(e.target.value.toLowerCase())))
        if (e.target.value === "") {
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  }

    
      
    return (
        <>
        <div className="SearchBar">
          <div className="Search">
                <input
            type="text"
            value={NameList}
            placeholder={'Search by name'}
            id="searchBar"
              onChange={handleChange}
            />
            <label className='loup'><BsSearch/></label>
            </div>
            
        </div>
            <div className>
            <section className='cards'>
                    <SearchList filteredNames={FilteredOrganisationList} />
                        </section>
            </div>
        </>
    );
};

export default FilterSearch;