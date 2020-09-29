import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const checked_val = "checked_val";

//Action
export const checked_values =() =>({type: checked_val})

//Reducer
const checkboxreducer =(state = [] ,action) =>{
  switch(action.type) {
    case checked_val :
      return {
        ...state,
        checkedbox: state.checkedbox
      }
      


    default:
      return state="No values selected"
  }
}
//Store
let store = createStore(checkboxreducer , applyMiddleware(thunk));
store.subscribe(() => {console.log(store.getState())});


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
