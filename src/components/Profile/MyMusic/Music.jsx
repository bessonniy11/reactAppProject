import React from "react";
import s from './Music.module.css'



const Music = (props) => {

    if (props.music.length === 0) {
        props.setMusic([
            {id: 1, artist: "AlisA", song: "bla-bla-bla"},
            {id: 2, artist: "BG", song: "bla-bla-bla"},
            {id: 3, artist: "DDT", song: "bla-bla-bla"},
            {id: 4, artist: "KISH", song: "bla-bla-bla"},
            {id: 5, artist: "Melnitsa", song: "bla-bla-bla"},
            {id: 6, artist: "Fleur", song: "bla-bla-bla"}
        ]);
    }

    return (
        <div className={s.musicPage}>

            {
                props.music.map(n =><div key={n.id}>
                    <div className={s.item}>
                        <div className={s.musicStroke}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-square-fill"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
                            </svg>
                        </div>
                        <div className={s.musicStroke}>{n.id}</div>
                        <div className={s.musicStroke}>{n.artist} /</div>
                        <div className={s.musicStroke}>{n.song} /</div>
                        <div className={s.musicStroke}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-circle-fill"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg>
                        </div>
                    </div>

            </div>)

            }
        </div>
    );
}

export default Music;