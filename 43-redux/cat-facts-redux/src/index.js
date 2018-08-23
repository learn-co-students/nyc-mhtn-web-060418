import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// Distributor, Giver, Dispatcher, Sharer, Give, Giving
import store from './store';


// API_URL
// ENVIRONMENT

// console.log('state inside of store', store.getState());
//
let action = { category: 'CAT', type: 'CAT', payload: 'meow' };
store.dispatch(action);
console.log('state inside of store', store.getState());
//
// let action2 = { type: 'DOG', payload: 'bark' };
// store.dispatch(action2);
// console.log('state inside of store', store.getState());
//
// let action3 = { type: 'COW', payload: 'moo' };
// store.dispatch(action3);
// console.log('state inside of store', store.getState());


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
