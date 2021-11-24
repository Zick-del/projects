import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://www.logolynx.com/images/logolynx/58/588363b2dde18b8d9fdf0e5754608657.png" alt="logo" />
        </header>
    )
}

export default Header;