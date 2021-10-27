import React from "react";
import styles from "./users.module.css";
import unnamed from "../../files/unnamed.jpg";
import {NavLink} from "react-router-dom";


let User = ({currentPage, onPageChanged, totalUsersCount, pageSize, user, ...props}) => {


    return (

            <div>
               <span>
                   <div>
                       <NavLink to={'/profile/' + user.id}>
                           <img src={user.photos.small != null ? user.photos.small : unnamed} className={styles.photo}/>
                       </NavLink>
                   </div>
                   <div>
                       {user.followed ?
                           <button disabled={props.followingInProgress.some(id => id === user.id)}
                                   className={styles.unfollow}
                                   onClick={() => {props.unfollow(user.id);}}
                           >Unfollow</button> :
                           <button disabled={props.followingInProgress.some(id => id === user.id)}
                                   className={styles.follow}
                                   onClick={() => {props.follow(user.id);}}
                           >Follow</button>}
                   </div>
               </span>
                    <span>
                   <span><div>{user.name}</div><div>{user.status}</div></span>
                   <span><div>{"u.location.country"}</div><div>{"u.location.city"}</div></span>
               </span>
            </div>
    );
};


export default User;