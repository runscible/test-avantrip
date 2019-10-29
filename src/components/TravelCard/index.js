import React from 'react';
import {Card,
        Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { travelGroup } from '../common/styleVariables';

const useStyles = makeStyles({
    ...travelGroup
});
export function TravelCard (){
    const classes = useStyles();
    return <Card className={classes.card}>
                <Typography>test</Typography>
            </Card>;
}
