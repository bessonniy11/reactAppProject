import React from "react";
import s from './NavbarFriends.module.css';



const NavbarFriends = (props) => {

    return (
        <div className={s.friends}>
            <div className={s.friendsImg}>
                {props.img}
                {props.name}
            </div>
        </div>
    );
}

export default NavbarFriends;