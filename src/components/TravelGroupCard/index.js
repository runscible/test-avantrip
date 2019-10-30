import React from 'react';
import {Card,
        CardContent,
        Typography,
        CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { travelGroup } from '../common/styleVariables';
import {contextApp} from "../../pages/Travels";

const useStyles = makeStyles({
    ...travelGroup
});
// colores del tema
// #60a1e7 (color de acento)
// #3a94d8 (color de texto resaltado)
export function TravelGroupCard (){
    const classes = useStyles();
     return (<>
                 <contextApp.Consumer>
                     {
                         consumerData => {
                             const data = consumerData.stayData;
                             if (Array.isArray(data)){
                               return data.map(staydata => {
                                     return (<Card className="card-grup-item" key={staydata.id} className={classes.card}>
                                                 <CardContent>
                                                     <Typography variant="caption">{staydata.label}</Typography>
                                                     <Typography className={classes.priceCard} variant="body1">Desde $ {staydata.bestPrice}</Typography>
                                                 </CardContent>
                                             </Card>)
                                 })
                             }
                         }
                     }
                 </contextApp.Consumer>
             </>);
}
