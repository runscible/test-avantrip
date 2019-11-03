"use strict";
import React , {useContext, useEffect} from 'react';
import {TravelGroupCard} from "./TravelGroupCard";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {header} from '../common/styleVariables';
import './index.scss';
import { Context } from '../business/Context';
import { getDataStay, queryStayData, client } from "../business/client";


const useStyles = makeStyles({
    ...header
});
export const  Header = () => {
    const { dispatch } = useContext(Context);
    const classes = useStyles();
    const getStayData = async () => {
        const stayData = await client.request(queryStayData)
        dispatch({ type: 'INIT_STAY_DATA', payload: stayData })
    }
    useEffect(()=> {
        getStayData();
    }, []);
    return (
            <div className={classes.container}>
                <div className="container-logo">
                    <img src="../../../assets/img/avantrip.jpg" />
                </div>
                <Typography className={classes.title}>Los Vuelos mas baratos para tu estadía en  <strong> Miami!</strong></Typography>
                    <div className={classes.containerCards}>
                        <TravelGroupCard/>
                    </div>
                </div>
            )
}
