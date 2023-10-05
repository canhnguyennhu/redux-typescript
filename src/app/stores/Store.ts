import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { useDispatch } from "react-redux";
import BooksSlice from './BooksSlice';
const RootReducer = combineReducers({
	BooksSlice: BooksSlice
})

const store = configureStore({
	reducer: RootReducer,
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
