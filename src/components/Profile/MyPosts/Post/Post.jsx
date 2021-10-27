import React from "react";
import s from './Post.module.css';

const Post = (props) => {



    return  (
    <div>
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4N8MmlTqVNcvF69NxZxA8-IAuIM-dBFgdnik-ZK3hKWCK-mg&s" alt=""/>
                <div className={s.d5}>

                </div>
                <div className={s.postText}>
                    {props.message}
                </div>
            </div>
            <div className={s.likesArea}>
                <div className={s.likeImg}>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5IaEY3s30Nd-QdoZbz0G6Uw5ENfgQ0JTy8hqer7tQst1EUcSF&usqp=CAU" alt=""/>
                </div>
                <span>{props.likes}</span>

            </div>
            <div className={s.postBorder}>

            </div>

        </div>

    </div>        
    )

}

export default Post;