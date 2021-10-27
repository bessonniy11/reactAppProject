import React, {Component} from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";


import {Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Profile/MyMusic/MusicContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import CoockingTable from "./components/Coocking/CoockingTable";
import HeaderContainer from "./components/Header/HeaderContainer";
import MyNewCalendar from "./components/MyNewCalendar/MyNewCalendar";
import ExperimentalContainer from "./components/Experimental/ExperimentalContainer";
import LoginPage from "./login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component{
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/news'
                           render={() => <NewsContainer/>}/>
                    <Route path='/music'
                           render={() => <MusicContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>


                    <Route path='/coocking/'
                           render={() => <CoockingTable/>}/>
                    <Route path='/my-new-calendar/'
                           render={() => <MyNewCalendar/>}/>
                    <Route path='/experimental/'
                           render={() => <ExperimentalContainer/>}/>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);



