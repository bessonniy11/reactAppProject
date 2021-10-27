import React from "react";

const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
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
        {id: 4, textMessage: 'How are your?', img:<img
                src="https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5be0025c48efa800a9d32c88_5be003f9b54c0700aa9bb018/scale_1200"
                alt=""/>},
    ],
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id:5,
                textMessage: action.newMessageBody,
                img: <img
                    src="https://avatars.mds.yandex.net/get-zen_doc/195350/pub_5cf37b2d0e1d9b00b010cbc9_5cf37b9da68d9100af4b7923/scale_1200"
                    alt=""/>
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state ;
    }
};

export const sendMessageCreator = (newMessageBody) =>
    ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;