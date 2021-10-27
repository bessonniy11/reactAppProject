import React from "react";
import s from "./experimental.module.css";
import {useDispatch, useSelector} from "react-redux";
import {rightAC} from "../../redux/experimental-reducer";


let Experimental = (props) => {

    // let right = props.right;
    // let down = props.down

    const dispatch  = useDispatch()
    const count = useSelector(state => props.right)


    function upKey(){
        let num = 50
        if (count===0) {
            dispatch(rightAC(num))
        } else {
            dispatch(rightAC(num))
        }


        console.log(count)
    };

    return (
        <div className={s.body}>

            <div className={s.imgBody} style={{backgroundPositionX: `${count}%`, backgroundPositionY: `${props.down}%`}} >
                <button
                    onClick={() =>upKey()}

                >up</button>
                <button>down</button>
                <button>left</button>
                <button>right</button>
            </div>
        </div>
    );
};


export default Experimental;