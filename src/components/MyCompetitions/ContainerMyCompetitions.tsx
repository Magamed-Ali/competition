import React, {useEffect} from 'react';
import MyCompetitions from "./MyCompetitions";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {getListTS, stateType} from "../../reducer/todoListsReducer";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function ContainerMyCompetitions() {
    const tasks = useSelector<AppRootStateType, Array<any>>(state => state.todoListsReducer.tasks)
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(getListTS('posts'))
    }, [])


    return (
        <div>
            <MyCompetitions tasks={tasks}/>
        </div>
    );
}

export default ContainerMyCompetitions;