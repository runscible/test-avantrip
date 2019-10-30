import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import React from "react";

const queryStayData = gql`{
        allStayDatas {
            bestPrice
            label
            }
        }`;

export function RenderService() {
    return <pre>test de servicio</pre>
}




