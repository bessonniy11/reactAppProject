import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.wall}>
            <div className={s.newPost}>
                <div className={s.newpost}>
                    <h4>New post..</h4>
                </div>
                <div>
                    <MyPostReduxForm onSubmit={onAddPost}/>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const MyPostFormSend = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.textarea}
                       name="newPostText"
                       component={Textarea}
                       validate={[required, maxLength10]}
                       placeholder="Введите текст"/>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    )
};

const MyPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'newPostForm'
})(MyPostFormSend);


export default MyPosts;