
import {combineReducers, createStore, legacy_createStore, AnyAction, applyMiddleware} from 'redux';
import thunk, {ThunkDispatch} from "redux-thunk"
import { useDispatch } from 'react-redux';
import {todoListsReducer} from "../reducer/todoListsReducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    todoListsReducer
})
// непосредственно создаём store

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>



export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>