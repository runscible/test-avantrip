import React from 'react';
import {Card,
        CardContent,
        Typography,
        CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { travelGroup } from '../common/styleVariables';
import {gql} from "apollo-boost";
import {useQuery} from 'react-apollo';

const useStyles = makeStyles({
    ...travelGroup
});
const queryStayData = gql`{
        allStayDatas {
            bestPrice
            label
            }
        }`;
// colores del tema
// #60a1e7 (color de acento)
// #3a94d8 (color de texto resaltado)
export function TravelGroupCard (){
    const {error, loading , data} = useQuery(queryStayData);
    const classes = useStyles();
    if (data){
     return  <>
            {
                data.allStayDatas.map(staydata => {
                    return <Card className="card-grup-item" key={staydata.id} className={classes.card}>
                            <CardContent>
                                    <Typography variant="caption">{staydata.label}</Typography>
                                    <Typography className={classes.priceCard} variant="body1">Desde $ {staydata.bestPrice}</Typography>
                            </CardContent>
                        </Card>
                })
            }
        </>;
    } else {
        return <CircularProgress className={classes.loader}/>

    }
}
