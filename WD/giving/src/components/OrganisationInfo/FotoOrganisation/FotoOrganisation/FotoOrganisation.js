import React from 'react';
import FotoOrganisation from '/Users/audrey/Documents/GitHub/wt21-giving/WD/giving/src/components/OrganisationInfo/FotoOrganisation/pictures';

function FotoOrganisation (props) {
    const {
      alt,
      ...otherProps
    } = props;
  
    return (
      <img alt={alt} {...otherProps} />
    );
  }

