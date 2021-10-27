import React from "react";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 9},
                // {id: 2, message: 'It\'s my first post', likes: 12},
                // {id: 3, message: 'Its really your first project?', likes: 7},
                // {id: 4, message: 'Yes, of course', likes: 25}
            ],
            newPostText: ''
        },
        navbarFriends: [
            {id: 2, name: 'Nikolay', img:<img
                    src="https://i.pinimg.com/originals/9f/f9/12/9ff912d0bd2a5d432e41c6126d688180.png"
                    alt=""/>},
            {id: 3, name: 'Tatyana', img:<img
                    src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                    alt=""/>},
            {id: 4, name: 'Sveta', img:<img
                    src="https://avatars.mds.yandex.net/get-zen_doc/195350/pub_5cf37b2d0e1d9b00b010cbc9_5cf37b9da68d9100af4b7923/scale_1200"
                    alt=""/>},
            {id: 5, name: 'Oleg', img:<img
                    src="https://c.wallhere.com/photos/db/26/Dalai_Lama_Buddhism_men_portrait_display_monochrome_face_portrait_glasses-50537.png!d"
                    alt=""/>},
        ],

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tatyana', img:<img
                        src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                        alt=""/>},
                {id: 2, name: 'Nikolay', img:<img
                        src="https://i.pinimg.com/originals/9f/f9/12/9ff912d0bd2a5d432e41c6126d688180.png"
                        alt=""/>},
                {id: 3, name: 'Sveta', img:<img
                        src="https://avatars.mds.yandex.net/get-zen_doc/195350/pub_5cf37b2d0e1d9b00b010cbc9_5cf37b9da68d9100af4b7923/scale_1200"
                        alt=""/>},
                {id: 4, name: 'Oleg', img:<img
                        src="https://c.wallhere.com/photos/db/26/Dalai_Lama_Buddhism_men_portrait_display_monochrome_face_portrait_glasses-50537.png!d"
                        alt=""/>},
            ],
            messages: [
                {id: 1, textMessage: 'Hello, people!', img:<img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4N8MmlTqVNcvF69NxZxA8-IAuIM-dBFgdnik-ZK3hKWCK-mg&s"
                        alt=""/>},
                {id: 2, textMessage: 'Hello, Bessonniy11!', img:<img
                        src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                        alt=""/>},
                {id: 3, textMessage: 'How are your?', img:<img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4N8MmlTqVNcvF69NxZxA8-IAuIM-dBFgdnik-ZK3hKWCK-mg&s"
                        alt=""/>},
                {id: 4, textMessage: 'Thinks, I very good!', img:<img
                        src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                        alt=""/>},
            ],
            newMessageBody: ''

        },
        newsPage: {
            news: [
                {id: 1, textNews: "В России хотят изменить правила медосвидетельствования для водителей"},
                {id: 2, textNews: "«Норникель» ликвидирует последствия ЧП в Норильске за свой счет"},
                {id: 3, textNews: "МИД РФ ответил на высылку российских дипломатов из Чехии"},
                {id: 3, textNews: "Минюст признал введенные из-за коронавируса меры обоснованными"},
                {id: 3, textNews: "Путин призвал стремиться к быстрому выходу из режима ограничений"},
                {id: 3, textNews: "Путин поручил правительству создать базу генетической информации"}
            ]
        },
        sidebar: {}

    }, //хранилище даных
    _callSubscriber(){
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};






export default store;
window.store = store;