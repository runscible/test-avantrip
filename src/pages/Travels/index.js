import React from 'react';
import {TravelCard} from "../../components/TravelGroupCard";
import {Header} from "../../components/Header";
import {Body} from '../../components/Body';
import {getAllTravelData, getDataStay} from "../../components/business/client";

export const contextApp = React.createContext();

export function Travels (){
    const travelAllData = getAllTravelData();
    const stayData = getDataStay();
    return (<>
                <contextApp.Provider value={
                {
                    travelAllData: travelAllData,
                    stayData: stayData
                }}>
                        <Header/>
                        <Body/>
                    </contextApp.Provider>
            </>);
}
