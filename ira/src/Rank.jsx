import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <h2>
                { `${name} , your current rank is.. `}     
            </h2>
            <div>
            {entries}
            </div>    
        </div>
    )
}

export default Rank;