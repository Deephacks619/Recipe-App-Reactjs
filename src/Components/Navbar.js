import React from 'react';
import style from './recipe.module.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className={style.navbar}>
            <h1 className={style.logo}>DK</h1>
            <h1 className="style.caption">
            <Link to="/">
                 Recipe Search
            </Link>
            </h1>
        </div>
    );
};

export default Navbar;