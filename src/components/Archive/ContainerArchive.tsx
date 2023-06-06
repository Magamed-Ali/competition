import React, {useEffect} from 'react';
import Archive from "./Archive";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {getListTS, stateType} from "../../reducer/todoListsReducer";


function ContainerArchive() {

    const tasks = useSelector<AppRootStateType, Array<any>>(state => state.todoListsReducer.tasks)
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(getListTS('comments'))
    }, [])


    return (
        <div>
            <Archive tasks={tasks}/>
        </div>
    );
}

export default ContainerArchive;

