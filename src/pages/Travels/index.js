import React, {useState, useEffect} from 'react';
import {TravelCard} from "../../components/Header/TravelGroupCard";
import {Header} from "../../components/Header";
import {Body} from '../../components/Body';
import {getAllTravelData, getDataStay, getFilteredTravel} from "../../components/business/client";

export const contextApp = React.createContext();

export function Travels(){
    const travelData = getFilteredTravel('3');
    const stayData = getDataStay();

    const filterEvent = ev =>  {
        getAllTravelData(ev);
    }
    return (<>
                <contextApp.Provider value={
                {
                    travelData,
                    stayData,
                    filterEvent
                }}>
                        <Header/>
                        <Body/>
                    </contextApp.Provider>
            </>);
}
