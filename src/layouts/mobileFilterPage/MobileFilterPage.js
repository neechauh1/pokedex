import React, { useEffect, useState } from 'react';
import OptionMobile from '../../components/optionMobile/OptionMobile';
import './mobileFilterPage.css';

const MobileFilterPage = ({
	setIsMobileFilterPageVisible,
	types,
	genders,
	selctedTypes,
	selectedGenders,
	setSelectedTypes,
	setSelectedGenders,
}) => {
	const [tempSelectedTypes, setTempSelectedTypes] = useState(selctedTypes);
	const [tempSelectedGenders, setTempSelectedGenders] =
		useState(selectedGenders);

	useEffect(() => {
		setTempSelectedTypes(selctedTypes);
	}, [selctedTypes]);

	useEffect(() => {
		setTempSelectedGenders(selectedGenders);
	}, [selectedGenders]);

	const handleFiltersReset = () => {
		setTempSelectedTypes(selctedTypes);
		setTempSelectedGenders(selectedGenders);
	};

	const handleApplyFilters = () => {
		setSelectedTypes(tempSelectedTypes);
		setSelectedGenders(tempSelectedGenders);
		setIsMobileFilterPageVisible(false);
	};

	return (
		<div className='mobile-filter-wrapper'>
			<div className='filter-header'>
				<span>Filters</span>
				<div
					className='cross-icon'
					onClick={() => setIsMobileFilterPageVisible(false)}
				>
					<img src='./images/cross.svg' />
				</div>
			</div>
			<div className='header-border'></div>
			<div className='options-container'>
				<OptionMobile
					label='Type'
					options={types}
					selectedData={tempSelectedTypes}
					setSelectedData={setTempSelectedTypes}
				/>
				<OptionMobile
					label='Gender'
					options={genders}
					selectedData={tempSelectedGenders}
					setSelectedData={setTempSelectedGenders}
				/>
			</div>
			<div className='buttons-sticky'>
				<button onClick={handleFiltersReset}>Reset</button>
				<button onClick={handleApplyFilters}>Apply</button>
			</div>
		</div>
	);
};

export default MobileFilterPage;
