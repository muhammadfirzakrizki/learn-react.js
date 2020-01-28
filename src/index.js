import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWorldComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';

const Helloworld = () => {
    return ( 
        <p> Muhammad Firzak Rizki </p>
    )
}

class StateFull extends React.Component {
    render() {
        return <p> StateFull Component </p>
    }
}

ReactDOM.render( < HelloWorldComponent / > , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();