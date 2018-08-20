import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/index.css';
import App from './components/App';

// Where to store user_id === token (session):
// 1. prop for App <== can't change, hardcoded
// 2. in App's state <== valid place, lose it when you refresh
// 3. some global variable <== no session, no real global thing
//        not a bad idea, there is a special place for offline data
//        localStorage <== token
//        localStorage.getItem('token')
// 4. In my Adapter
//        another method on the adapter to get the id (aka what will be the token)
//        Once we realize that we can store variables offline and get it back when we reload,
//        we also realize we don't want to copy paste code all the time.
//        Adapter.getAuthToken

// Token, this magical token which will be our "session": JWT
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
