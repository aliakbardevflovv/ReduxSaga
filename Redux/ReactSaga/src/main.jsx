import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux' ;
import myFirstReducer from './reducer.jsx';
import createSagaMiddleware from 'redux-saga' ;
import mySaga from './sagas' ;

 
import './index.css'

const sagaMiddleWare = createSagaMiddleware();
const rootReducer = combineReducers({myFirstReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare)) ;
sagaMiddleWare.run(mySaga) ;



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
