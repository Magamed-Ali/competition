import {Dispatch} from "redux";
import {listsAPI} from "../api/Lists-api";


export type stateType = {
    tasks: Array<any>
    isLoading: boolean
}

type typeAddListAC = ReturnType<typeof addListAC>
type typeChangeIsLoadingAC = ReturnType<typeof changeIsLoadingAC>
type actionType = typeAddListAC | typeChangeIsLoadingAC

const initialState: stateType = {
    tasks: [],
    isLoading: true
}
export const todoListsReducer = (state = initialState, action: actionType): stateType => {
    switch (action.type) {
        case "ADD-LIST":

            return {...state, tasks: action.todoList}
        case "CHANGE-IS-LOADING":
            return {...state, isLoading: action.loading}
        default:
            return state
    }
}
export const changeIsLoadingAC = (loading: boolean) => {
    return {
        type: "CHANGE-IS-LOADING",
        loading
    } as const
}

export const addListAC = (todoList: any) => {
    return {
        type: "ADD-LIST",
        todoList
    } as const
}
export const getListTS = (page: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(changeIsLoadingAC(true))
        try {
            const data = await listsAPI.getLists(page)
            dispatch(addListAC(data))
            dispatch(changeIsLoadingAC(false))
        } catch (error) {
            console.log(error)
        }
    }
}