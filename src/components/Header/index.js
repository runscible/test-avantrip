import React from 'react';
import {TravelGroupCard} from "../TravelGroupCard";
import {Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {header} from '../common/styleVariables';
import './index.scss';
const useStyles = makeStyles({
    ...header
});
export function Header(){
    const classes = useStyles();
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
