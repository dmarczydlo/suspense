import React from 'react';


const User = ({data}) => {

    return (
        <div>
            <p>
                {`ID: ${data.id}`}
            </p>
            <p>
                {`title: ${data.title}`}
            </p>
        </div>
    );
};

export default User;
