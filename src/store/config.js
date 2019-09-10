import React,{Component} from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore,compose} from "redux";

import {rootReducer} from '../reducers/index';
import AppRoute from '../App';
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <AppRoute/>
            </Provider>
        );
    }
}




