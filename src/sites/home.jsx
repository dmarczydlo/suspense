import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="test">
        <Link
            name="user"
            to="/user/"
        >
            {'GoToUser'}
        </Link>
    </div>

);

export default Home;
