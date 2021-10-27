import React from "react";
import styles from "./paginator.module.css";


let Paginator = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.numbersBox}>
            {pages.map(p => {
                return <div className={props.currentPage === p ? styles.selectedPage : styles.defaultPage}
                            onClick={(e) => {
                                props.onPageChanged(p)
                            }}>{p}</div>
            })}
        </div>
    );
};


export default Paginator;