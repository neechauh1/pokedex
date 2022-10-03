import React from 'react';
import './search.css';

const Search = ({ searchText, setSearchText }) => {
	const handleChange = (event) => {
		setSearchText(event?.target?.value);
	};

	return (
		<div className='search-container'>
			<div className='label'>
				<span>Search by</span>
			</div>
			<div className='search'>
				<input
					value={searchText}
					type='search'
					id='search'
					placeholder='Name or Number'
					autoComplete='off'
					onChange={handleChange}
				/>
				<img src='images/search.svg' alt='search-icon' />
			</div>
		</div>
	);
};

export default Search;
