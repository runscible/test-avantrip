import React, { useEffect, useContext } from 'react';
import {TravelCard} from './TravelCard/index';
import './index.scss';
import { Context } from '../business/Context';
import { queryTravelData, client } from '../business/client';
export function Body(){
    const { dispatch } = useContext(Context);
    const getTravelData = async () => {
        const travelData = await client.request(queryTravelData)
        dispatch({ type: 'INIT_TRAVEL_DATA', payload: travelData })
    }
    useEffect(()=> {
        getTravelData();
    }, [])
    return <div className="container">
                <TravelCard/>
            </div>
}
