import React from 'react';
import './index.css'

const Rank = ({name, entries}) => {

      // Safely capitalize the first character if name is not empty
  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const capitalizedName = capitalizeFirstLetter(name);

    return (
        <div>
            <h2>
                { `${capitalizedName}, your current rank is.. `}     
            </h2>
            <h2 style={{ color: '#0a2351' }} >
            {entries}
            </h2>    
        </div>
    )
}

export default Rank;