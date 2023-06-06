import React, {useEffect} from 'react';
import CurrentCompetitions from "./CurrentCompetitions";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {getListTS, stateType} from "../../reducer/todoListsReducer";

function ContainerCurrentCompetitions() {
    const tasks = useSelector<AppRootStateType, Array<any>>(state => state.todoListsReducer.tasks)
    const dispatch = useAppDispatch();



    useEffect(()=> {
        dispatch(getListTS('todos'))
    }, [])


    return (
        <div>
            <CurrentCompetitions tasks={tasks}/>
        </div>
    );
}

export default ContainerCurrentCompetitions;