import React from 'react';
import './filterMobile.css';

const FilterMobile = ({ setIsMobileFilterPageVisible }) => {
	return (
		<div
			className='filter-container'
			onClick={() => setIsMobileFilterPageVisible(true)}
		>
			<img src='./images/filter.svg' alt='filter-icon' />
		</div>
	);
};

export default FilterMobile;
