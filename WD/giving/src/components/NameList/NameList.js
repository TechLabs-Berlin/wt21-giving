import React from 'react';

const NameList = props => {
  const names = props.names.map(names => {
    return <div>
      <names key={names}></names>
    </div>
  });

return <div>{names}</div>
};

export default NameList