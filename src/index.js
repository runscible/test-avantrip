import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import './index.scss';
import {Travels} from "./pages/Travels";
const elem = document.getElementById('root');
const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24'
});

function App (){
    return (
        <>
            <Travels/>
        </>
    )
}
elem ? ReactDOM.render(<ApolloProvider client={client}>
                            <App />
                      </ApolloProvider>,
                        elem):
                        document.write('<h1>ocurrio un eror a la hora de renderizar la página</h1>');
