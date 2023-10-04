import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import menus from "../../configs/menus";
import { setOpeningNewBook, updateBook } from "../../stores/BooksSlice"
import "./style.css";

const Book = ({}) => {
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [type, setType] = useState("economy");
	const dispatch = useDispatch();

	const onChangeText = (e : any) => {
		const value = e.target.value;
		const name = e.target.name;
		if (name === "name") {
			setName(value);
		} else if (name === "author") {
			setAuthor(value);
		}
	}

	const onSubmit = () => {
		const book = {
				name: name,
				author: author,
				description: "",
				price: "",
		}
		dispatch(updateBook({book, type}))
		dispatch(setOpeningNewBook(false));
	}

	const onChangeBookType = (e : any) => {
		setType(e.target.value)
	}

	const closeModal = () => {
		dispatch(setOpeningNewBook(false));
	}
	return (
		<div className="book-container">
			<div className="book-header">
				<span className="title">Add New Book Form</span>
				<span className="icon-close" onClick={closeModal}>X</span>
			</div>
			<BookText name="name" label="Book Name" onChangeText={onChangeText} text={name}></BookText>
			<BookText name="author" label="Author" onChangeText={onChangeText} text={author}></BookText>
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

interface  Props{
	name: string,
	label: string,
	text: string,
	onChangeText: any
}

const BookText = ({ name, label, text, onChangeText } : Props) => (
	<div className="book-field">
		<span className="label">{label}</span>
		<input 
			className="input-field"
			name={name}
			type="text" 
			value={text}
			onChange={onChangeText}
		/>
	</div>
)

export default Book;