import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={s.header}>
        <img src="https://www.whitechurch.co.uk/whitechurch-co-uk/_img/images/Artboard%202.png" alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.loginContainer}>
                    <div className={s.login}>{props.login ?  props.login : ""}</div>
                    <button onClick={props.logout} className={s.logOut}>Log out</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;
