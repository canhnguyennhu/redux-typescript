
import React from 'react';
import { useDispatch } from 'react-redux'
import "./style.css";
import { setOpeningNewBook } from '../../../stores/BooksSlice';

const MainBody = ({ children } : any) => {
	const dispatch = useDispatch()
	const addNewBook = () => {
		dispatch(setOpeningNewBook(true))
	}
	return (
		<div className="body-container">
			<div className="main-bar">
				<button className="btn btn-add" onClick={addNewBook}>Add New Book</button>
			</div>
			{
				children
			}
		</div>
	)
}
export default MainBody;