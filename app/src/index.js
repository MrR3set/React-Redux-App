import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {dataReducer} from './reducers/dataReducer'
import { applyMiddleware, createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from "react-router-dom"

const store = createStore(dataReducer,applyMiddleware(thunk));
ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));

