import { makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import moment from "moment";


const useStyles = makeStyles(theme => ({
    counter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        color: "white",
        fontSize: "22px",
        border: "1px solid #fff",
        borderRadius: 4,
        background: "rgba(0,0,0,0.5)"
    }
}));

const Sayac = () => {

    const classes = useStyles();

    const [date, setDate] = useState(() => {
        const localDate = localStorage.getItem("date")
        return localDate ? moment(JSON.parse(localDate)) : moment().add(10, "hours")
    });

    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    let interval = useRef();

    useEffect(() => {
        geriSayimiBaslat();
        clearInterval(interval.current)
    }, [date]);

    const geriSayimiBaslat = () => {
        interval = setInterval(() => {
            localStorage.setItem("date", JSON.stringify(date))
            const now = moment();
            const distance = date - now;

            const hours = moment.duration(distance).hours();
            const minutes = moment.duration(distance).minutes();
            const seconds = moment.duration(distance).seconds();

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }

        }, 1000);
    }

    return (
        <div className={classes.counter} >
            <div>
                <p> {hours} </p>
                <p> <small>Saat</small> </p>
            </div>

            <div>
                <p> {minutes} </p>
                <p> <small>Dakika</small> </p>
            </div>

            <div>
                <p> {seconds} </p>
                <p> <small>Saniye</small> </p>
            </div>
        </div>
    );
};

export default Sayac;
