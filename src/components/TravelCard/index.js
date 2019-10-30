import React from 'react';
import {gql} from "apollo-boost";
import {useQuery} from 'react-apollo';
import {makeStyles} from "@material-ui/core";
import {Card,
        CardContent,
        CardMedia,
        Typography,
        CircularProgress} from "@material-ui/core";

import {cardTravel} from '../common/styleVariables';

const queryTravelData = gql`{
                          allCards{
                            id
                            imgUrl
                            link
                            price
                            scale
                            stayId
                            description
                          }
                        }`;

const useStyles = makeStyles({
    ...cardTravel
});

export function TravelCard() {
    const classes = useStyles();
    const {loading, error, data} = useQuery(queryTravelData);
    if (loading) return <CircularProgress/>;
    if (data){
        return data.allCards.map(cardTravel => {
            return (
                <Card className={classes.card} key={cardTravel.id}>
                    <img src={cardTravel.imgUrl}/>
                    <CardContent>
                        <Typography>{cardTravel.description}</Typography>
                        <Typography>{cardTravel.scale}</Typography>
                    </CardContent>
                </Card>
            )
        })
    }
}
