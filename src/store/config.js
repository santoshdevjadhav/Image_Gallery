import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore,compose} from "redux";
import {rootReducer} from '../reducers/index';
import AppRoute from '../App';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger=store=>{
    return next=>{
        return action=>{
            console.log('[Middleware] dispatching',action );
            const result=next(action);
            console.log('[Middleware] next state',store.getState());
            return result;
        }
    }
};

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <AppRoute/>
            </Provider>
        );
    }
}




