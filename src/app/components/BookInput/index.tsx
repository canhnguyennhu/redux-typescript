import "./style.css";
interface  Props{
	name: string,
	label: string,
	text: string,
	onChangeText: any
}

const BookInput = ({ name, label, text, onChangeText } : Props) => (
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

export default BookInput;
