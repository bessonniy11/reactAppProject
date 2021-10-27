import React from "react";
import s from './News.module.css'


const News = (props) => {
    if (props.news.length === 0) {
        props.setNews([
            {id: 1, textNews: "В России хотят изменить правила медосвидетельствования для водителей"},
            {id: 2, textNews: "«Норникель» ликвидирует последствия ЧП в Норильске за свой счет"},
            {id: 3, textNews: "МИД РФ ответил на высылку российских дипломатов из Чехии"},
            {id: 4, textNews: "Минюст признал введенные из-за коронавируса меры обоснованными"},
            {id: 5, textNews: "Путин призвал стремиться к быстрому выходу из режима ограничений"},
            {id: 6, textNews: "Путин поручил правительству создать базу генетической информации"}
        ]);
    }

    return (
        <div className={s.newsPage}>

            {
                props.news.map(n =><div key={n.id}>
                    <div className={s.item}>
                        {n.id} {n.textNews}
                    </div>

            </div>)

            }
        </div>
    );
}

export default News;