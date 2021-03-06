import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={path} activeClassName={s.activeLink}>{props.img} {props.name} </NavLink>
            </div>
        </div>

    );
}

export default DialogItem;