import { useState } from 'react';
import { useAppDispatch, AppDispatch } from "../../stores/Store";
import menus from "../../configs/menus";
import { setOpeningNewBook, updateBook } from "../../stores/BooksSlice"
import BookInput from '../BookInput';
import "./style.css";

const Book = ({}) => {
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [type, setType] = useState("economy");
	const dispatch: AppDispatch = useAppDispatch();

	const onChangeText = (e : React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		const name = e.target.name;
		if (name === "name") {
			setName(value)
		} else if (name === "author") {
			setAuthor(value);
		}
	}

	const onSubmit = (): void => {
		const book = {
				name: name,
				author: author,
				description: "",
				price: "",
		}
		dispatch(updateBook({book, type}))
		dispatch(setOpeningNewBook(false));
	}

	const onChangeBookType = (e : React.ChangeEvent<HTMLSelectElement>) : void=> {
		setType(e.target.value)
	}

	const closeModal = (): void => {
		dispatch(setOpeningNewBook(false));
	}
	return (
		<div className="book-container">
			<div className="book-header">
				<span className="title">Add New Book Form</span>
				<span className="icon-close" onClick={closeModal}>X</span>
			</div>
			<BookInput name="name" label="Book Name" onChangeText={onChangeText} text={name}></BookInput>
			<BookInput name="author" label="Author" onChangeText={onChangeText} text={author}></BookInput>
			<div className="book-field">
				<span className="label">Book Type</span>
				<select className="input-field select" onChange={onChangeBookType}>
					<option disabled hidden value=''></option>
					{
						menus.left.map(item => (
							<option value={item.type}>{item.name}</option>
						))
					}
				</select>
			</div>
			<div className="book-footer">
				<button className="btn btn-primary" onClick={onSubmit}>Subbmit</button>
			</div>
		</div>
	)
}


export default Book;