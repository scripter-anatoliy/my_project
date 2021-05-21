import React, {useCallback, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Gistogramm.module.css";

type PropsType = {
    date: string
    count: number
    max: number
}

export const Gistogramm = (props: PropsType) => {
    if(!props) return null;
    let koef = props.count / props.max * 255;
    let yellow;
    85<koef && koef<170 ? yellow=true : yellow=false;
    return (
        <div className={styles.container}>
            <div style={{height: `${props.count}px`, 
                        backgroundColor: `rgb(${yellow ? koef+100 : koef},${yellow ? 355-koef : 255 - koef},${0})`,
                        }}>
            </div>
            {props.date}
        </div>
    )
}