import React, {useContext} from 'react';
import {Card,
        CardContent,
        Typography,
        CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { travelGroup } from '../../common/styleVariables';
import {contextApp} from "../../../pages/Travels";

const useStyles = makeStyles({
    ...travelGroup
});
// colores del tema
// #60a1e7 (color de acento)
// #3a94d8 (color de texto resaltado)
export function TravelGroupCard (){
    const classes = useStyles();
    const {stayData, filterEvent} = useContext(contextApp);
     if (Array.isArray(stayData)){
       return stayData.map(stayElem => {
             return (<Card
                        value={stayElem.customId}
                        onClick={()=> filterEvent(stayElem.customId)}
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

}
