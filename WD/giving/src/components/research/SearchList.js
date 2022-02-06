import React from 'react';
import Name from './Name';


function SearchList({ filteredNames= [] }) {
  const filtered = filteredNames.map(organisation =>
    <Name key={organisation.id} organisation={organisation} />);
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;