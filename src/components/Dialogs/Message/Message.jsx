import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {

    return (
        <div className={s.message}>
            {props.img} <p>{props.body}</p>
        </div>
    );
}



export default Message;