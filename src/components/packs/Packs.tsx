import React, {useCallback, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC, addPackTC, deletePackTC, updatePackTC} from "../../state/reducers/packs";
import {CardPackType} from "../../api/api";
import {appRootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes/Routes";
import styles from "./Packs.module.css";

type PackSelectorType ={
    packs: CardPackType[]
    cardPacksTotalCount: number
    page: number
    pageCount: number
}

export const Packs = () => {

    const dispatch = useDispatch();
    let {packs, cardPacksTotalCount, page, pageCount} = useSelector<appRootStateType, PackSelectorType>(state => state.packs);
    let [addingPackName, setAddingPackName] = useState("");
    let [privatePack, setPrivatePack] = useState(false);
    let [filterPackName, setFilterPackName] = useState("");

    useEffect(() => {
        dispatch(getPacksTC('', 0, 999, 1, 2000))
    }, []);

    const onChangeHandlerAddingPackName = (e: React.FormEvent<HTMLInputElement>) => {
        setAddingPackName(e.currentTarget.value);
    }

    const onChangeHandlerPrivatePack = (e: React.FormEvent<HTMLInputElement>) => {
        setPrivatePack(e.currentTarget.checked);
    }

    const onClickHandlerAddingPackName = useCallback(() => {
        dispatch(addPackTC(addingPackName, privatePack));
        dispatch(getPacksTC('', 0, 999, 1, 10))
    },[addingPackName, privatePack]);

    const onChangeHandlerFilterPackName = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setFilterPackName(e.currentTarget.value);
        dispatch(getPacksTC(filterPackName, 0, 999, 1, 10))
    },[filterPackName]);
    
    return (
        <div className={styles.container}>
            <input onChange={onChangeHandlerAddingPackName} value={addingPackName} placeholder="Enter new PackName"/>
            <h3>Private Pack</h3>
            <input type="checkbox" title={"Private Pack"} onClick={onChangeHandlerPrivatePack} checked={privatePack}/>
            <button onClick={onClickHandlerAddingPackName}>Add</button>
            <input onChange={onChangeHandlerFilterPackName} value={filterPackName} placeholder="Filter by PackName"/>
            <div>Total Packs: {cardPacksTotalCount}</div>
            {packs.map(el => {
                return (
                    <div>
                        {el._id} / {el.cardsCount} / {el.created} / {el.name} /  
                        {el.private} / {el.user_id} / {el.user_name}
                        <button>updatePack</button> 
                        <button onClick={(() => {
                            dispatch(deletePackTC(el._id));
                            dispatch(getPacksTC(filterPackName, 0, 999, 1, 10));
                            })}>deletePack</button>
                    </div>
                )
            })}
            <div></div>
        </div>
    )
}