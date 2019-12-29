import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import {Provider} from 'react-globally'
const initalState = {
    isOpenDeleteModal: false,
    deleteEmploye_id: null 

}

const container = document.getElementById('app')

ReactDOM.render(
    <Provider globalState={initalState}>

 <App />
 </Provider>,
 container);
