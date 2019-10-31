import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import './css/index.css'
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>,
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
