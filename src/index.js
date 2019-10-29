import React from 'react';
import ReactDOM from 'react-dom';
import {Travels} from "./pages/Travels";
import './index.scss';

const elem = document.getElementById('root');
function App (){
    return (
        <>
            <Travels />
        </>
    )
}
elem ? ReactDOM.render(<App />, elem): document.write('ocurrio un eror en el render');
