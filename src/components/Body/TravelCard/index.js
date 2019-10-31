import React, {useContext} from 'react';
import {makeStyles} from "@material-ui/core";
import './index.scss';
import {Card,
        CardContent,
        Typography,
        CircularProgress} from "@material-ui/core";
import {contextApp} from "../../../pages/Travels";
import {cardTravel} from '../../common/styleVariables';


const useStyles = makeStyles({
    ...cardTravel
});

export function TravelCard() {
    const classes = useStyles();
    const {travelData} = useContext(contextApp);
        if (Array.isArray(travelData)){
            return travelData.map(cardTravel => {
                return (
                    <Card className={classes.card} key={cardTravel.id}>
                        <img src={cardTravel.imgUrl}/>
                        <CardContent className="content">
                            <div className="container-description">
                                <Typography variant="caption">{cardTravel.scale}</Typography>
                                <Typography variant="subtitle2">{cardTravel.description}</Typography>
                            </div>
                            <div className="container-price">
                                <Typography display="block" variant="caption">Precio desde</Typography>
                                <Typography variant="subtitle2">$ {cardTravel.price}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                )
            })
        } else {
            return <CircularProgress/>
        }
}



