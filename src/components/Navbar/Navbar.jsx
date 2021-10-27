import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {


    return (
        <nav className={s.nav}>
            <NavLink to="/profile" activeClassName={s.activeLink}>
                <div className={s.item}>Profile</div>
            </NavLink>
            <NavLink to="/dialogs/" activeClassName={s.activeLink}>
                <div  className={s.item}>Messages</div>
            </NavLink>
            <NavLink to="/users/" activeClassName={s.activeLink}>
                <div className={s.item}>Friends</div>
            </NavLink>
            <NavLink to="/news/" activeClassName={s.activeLink}>
                <div className={s.item}>News</div>
            </NavLink>
            {/*<NavLink to="/music/" activeClassName={s.activeLink}>*/}
            {/*    <div className={s.item}>Music</div>*/}
            {/*</NavLink>*/}
            <NavLink to="/coocking/" activeClassName={s.activeLink}>
                <div className={`${s.item} ${s.friends}`}>Coocking</div>
            </NavLink>
            <NavLink to="/my-new-calendar/" activeClassName={s.activeLink}>
                <div className={s.item}>Calendar</div>
            </NavLink>
            <NavLink to="/experimental/" activeClassName={s.activeLink}>
                <div className={s.item}>For Tests</div>
            </NavLink>
        </nav>
    );
}

export default Navbar;