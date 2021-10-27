import loader from "../../../files/loader.gif";
import React from "react";
import s from './preloader.module.css'

let Preloader = (props) => {
    return <div>
        <img src={loader} className={s.loader}/>
    </div>
};
export default Preloader;