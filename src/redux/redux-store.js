import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";
import newsReducer from "./news-reduser";
import musicReducer from "./music-reduser";
import coockingReducer from "./coocking-reduser";
import authReducer from "./auth-reducer";
import experimentalReducer from "./experimental-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    coockingPage: coockingReducer,
    auth: authReducer,
    experimental: experimentalReducer,
    form: formReducer,
    app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__= store;

export default store;