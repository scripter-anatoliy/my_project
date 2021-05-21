import React, {useCallback, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC} from "../../state/reducers/packs";
import {CardPackType} from "../../api/api";
import {appRootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes/Routes";
import styles from "./Stats.module.css";
import {Gistogramm} from "./gistogramm/Gistogramm";

type PackSelectorType = {
    packs: CardPackType[]
    cardPacksTotalCount: number
}

export const Stats = () => {

    const dispatch = useDispatch();
    let {packs, cardPacksTotalCount} = useSelector<appRootStateType, PackSelectorType>(state => state.packs);

    useEffect(() => {
        dispatch(getPacksTC('', 0, 999, 1, 2000))
    }, []);

    let arr = [];
    let max = 0;
    for(let i = 0; i < packs.length; i++){
        arr[i] = packs[i].created.substr(0,7);
    }
    let narr = Object.entries(arr.reduce((acc: any, el: string) => {
        acc[`${el}`] = (acc[`${el}`] || 0) + 1;
        return acc;
    }, {}));
    for(let i = 0; i < narr.length; i++){
        if(Number(narr[i][1]) > max) max = Number(narr[i][1])
    }
    console.log(max)
    return (
        <div className={styles.container}>
            <div>Total Packs: {cardPacksTotalCount}</div>
            {narr && narr.map((el: any) => {
                return (
                    <Gistogramm date={el[0]} count={el[1]} max={max}/>
                )
            })}
        </div>
    )
}