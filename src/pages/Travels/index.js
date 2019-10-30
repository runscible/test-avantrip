import React, {useState, useEffect} from 'react';
import {TravelCard} from "../../components/TravelGroupCard";
import {Header} from "../../components/Header";
import {Body} from '../../components/Body';
import {getAllTravelData, getDataStay} from "../../components/business/client";

export const contextApp = React.createContext();

export function Travels(){
    const travelData = getAllTravelData('');
    const stayData = getDataStay();

    const filterTravelData = ev =>  {
        getAllTravelData(ev);
    }
    return (<>
                <contextApp.Provider value={
                {
                    travelData: travelData,
                    stayData: stayData,
                    filterEvent: filterTravelData
                }}>
                        <Header/>
                        <Body/>
                    </contextApp.Provider>
            </>);
}
