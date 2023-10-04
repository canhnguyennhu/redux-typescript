import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import BooksSlice from './BooksSlice';
const RootReducer = combineReducers({
	BooksSlice: BooksSlice
})

export default configureStore({
	reducer: RootReducer,
})