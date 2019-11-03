import React, {useContext, useEffect, useState} from 'react';
import {Card,
        CardContent,
        Typography,
        CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { travelGroup } from '../../common/styleVariables';
import { Context } from '../../business/Context';
import { queryFilteredTravelData, queryTravelData, client  } from '../../business/client';
const useStyles = makeStyles({
    ...travelGroup
});
// colores del tema
// #60a1e7 (color de acento)
// #3a94d8 (color de texto resaltado)
export function TravelGroupCard (){
    const classes = useStyles();
    const { state, dispatch }  = useContext(Context);
    const { stayData } = state;
    const filterTravels = async id => {
        if (id === '0') {
            const allData = await client.request(queryTravelData);
            // 0 es el caso sin filtros para las tarjetas
            dispatch({ type: 'FILTER_TRAVELS', payload:  allData })

        } else {
            const filteredData = await client.request(queryFilteredTravelData,  {
                stayId: `${id}`
                }
            )
            dispatch({ type: 'FILTER_TRAVELS', payload:  filteredData })
        }
    }
    if (stayData){
       return stayData.allStayDatas.map(stayElem => {
             return (<Card
                        value={stayElem.customId}
                        onClick={()=> filterTravels(stayElem.customId)}
                        className="card-grup-item"
                        key={stayElem.id}
                        className={classes.card}>
                         <CardContent>
                             <Typography variant="caption">{stayElem.label}</Typography>
                             <Typography className={classes.priceCard} variant="body1">Desde $ {stayElem.bestPrice}</Typography>
                         </CardContent>
                     </Card>);
         })
     } else {
         return <CircularProgress/>
     }
    return <pre>culo</pre>

}
