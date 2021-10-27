import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem img={d.img} name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message img={m.img} key={m.id} body={m.textMessage}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogReduxFormSend onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};
const maxLength30 = maxLengthCreator(30);

const DialogFormSend = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.messageInput}
                   name="newMessageBody"
                   component={Textarea}
                   validate={[required, maxLength30]}
                   placeholder='Enter your message'
                   cols="30" rows="5"/>
            <button className={s.sendMessage}>Отправить сообщение</button>
        </form>
    )
};
const DialogReduxFormSend = reduxForm({form: 'newMessageForm'})(DialogFormSend);


export default Dialogs;


// const Dialogs = (props) => {
//
//
//     let dialogsElements = props.store.dialogs.map(d => <DialogItem img={d.img} name={d.name} id={d.id}/>);
//     let messagesElements = props.store.messages.map(m => <Message img={m.img} textMessage={m.textMessage}/>);
//
//     let newMessageElement = React.createRef();
//
//     let addMessage = () => {
//         let text = newMessageElement.current.value;
//         props.addMessage(text);
//         newMessageElement.current.value = '';
//     }
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogItems}>
//                 {dialogsElements}
//             </div>
//             <div className={s.messages}>
//                 {messagesElements}
//                 <div>
//                     <textarea ref={newMessageElement} className={s.messageInput} id="" cols="30" rows="5"/>
//                     <button onClick={addMessage} className={s.sendMessage}>Отправить сообщение</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Dialogs;