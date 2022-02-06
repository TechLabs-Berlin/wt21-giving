import React from 'react';
import Name from '../Name';

function SearchList({ filteredNames = [] }) {
  const filtered = filteredNames.map(organisation =>
    <Name key={organisation.id} organisation={organisation} /> )
    return (
    <div className="card-content">
      <h2 className="card-name">{filtered}</h2>
    </div>
  );
  }



export default SearchList;