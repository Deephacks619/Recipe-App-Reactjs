import React from 'react';

const Details1 = (props) => {
    console.log(props.health)
    return (
        <div>
            {props.health}
        </div>
    );
};

export default Details1;