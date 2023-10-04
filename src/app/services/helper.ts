
export const getBookTypeFromPathName = (pathname: string) =>{
	return pathname.split('/')[1];
}

export const getBooks = (books: any, type: string) => {
	const fetchArr = [];
	if (type && type !== "home") {
		fetchArr.push(...books[type])
		return fetchArr
	}
	for (let key in books) {
		fetchArr.push(...books[key])
	}
	return fetchArr;
}