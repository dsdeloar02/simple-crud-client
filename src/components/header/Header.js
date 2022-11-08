import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='HeaderWrapper'>
            <div className="navWrapper">
                <div className="navLogo">
                    <h1>MongoDb</h1>
                </div>
                <ul>
                    <li><Link to='/users'>User</Link></li>
                    <li><Link to='/'>Add Users</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
