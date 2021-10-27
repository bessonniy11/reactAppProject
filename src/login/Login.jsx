import React from "react";
import s from './Login.module.css'
import style from '../components/common/FormsControls/FormsControls.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe )
    };
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }
    // const [logining, setLogining] = React.useState()

    return (
        <div className={s.loginArea}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div>
                <h1>LOGIN</h1>
            </div>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type:'password'})}
            {createField(null, "rememberMe", [], Input, {type:'checkbox'}, "Remember me")}
            {error && <div className={style.invalidForm}>
                {`${error}!!!`}
            </div>}
            <div className={s.loginButton}>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);