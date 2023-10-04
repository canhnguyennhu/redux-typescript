import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import MainBody from "./components/MainBody";
import Book from "../components/Book";
import { openingNewBookSelector } from "../stores/BooksSlice"
import "./style.css"

const MainLayout = ({ children } : any) =>  {
	const openingNewBook = useSelector(openingNewBookSelector);
	return (
			<div className="main-layout">
				<Header/>
				<div className="main-container">
					<LeftMenu/>
					<MainBody>
						{children}
					</MainBody>
				</div>
				{
					openingNewBook && <Book></Book>
				}
			</div>
	);
}

export default MainLayout