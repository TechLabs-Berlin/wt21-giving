import React from 'react';

const searchField = ({ keyword, setKeyword }) => {

        return (
          <div>
          <input className='SearchBar'
           key="random1"
              value={keyword}
              placeholder={'Search by name'}
              onChange={(e) => setKeyword(e.target.value)}
            />
            </div>
        );
      }
      
searchField.defaultProps = {
        text: 'Name'
      }

export default searchField;