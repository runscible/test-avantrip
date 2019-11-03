import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import './index.scss';
import {Travels} from "./pages/Travels";

const elem = document.getElementById('root');
import { client } from './components/business/client';
import { Context } from './components/business/Context';
import { Reducer } from './components/business/Reducer';


function App (){
    const initialState = useContext(Context);
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <>
            <Context.Provider value={{ state, dispatch }}>  
                <Travels/>
            </Context.Provider>
        </>
    )
}
elem ? ReactDOM.render(<ApolloProvider client={client}>
                            <App />
                      </ApolloProvider>,
                        elem):
                        document.write('<h1>ocurrio un eror a la hora de renderizar la página</h1>');
