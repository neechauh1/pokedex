import React from 'react';
import Search from '../search/Search';
import Option from '../option/Option';
import FilterMobile from '../filterMobile/FilterMobile';
import './searchAndFilter.css';

const SearchAndFilter = ({
	searchText,
	setSearchText,
	types,
	genders,
	selctedTypes,
	selectedGenders,
	setSelectedTypes,
	setSelectedGenders,
	setIsMobileFilterPageVisible,
}) => {
	return (
		<div className='search-and-filter-container'>
			<div className='search-block'>
				<Search searchText={searchText} setSearchText={setSearchText} />
			</div>
			<div className='filter-mobile'>
				<FilterMobile
					setIsMobileFilterPageVisible={setIsMobileFilterPageVisible}
				/>
			</div>
			<div className='option-block'>
				<Option
					label='Type'
					data={types}
					selectedData={selctedTypes}
					setSelectedData={setSelectedTypes}
				/>
			</div>
			<div className='option-block'>
				<Option
					label='Gender'
					data={genders}
					selectedData={selectedGenders}
					setSelectedData={setSelectedGenders}
				/>
			</div>
		</div>
	);
};

export default SearchAndFilter;
