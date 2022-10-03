import React from 'react';
import utils from '../../utils/utils';
import './dataInfoMobile.css';

const DataInfoMobile = ({ height, weight, genders, eggGroups }) => {
	return (
		<div className='data-info-container-mobile'>
			<div className='mobile-wrapper'>
				<div className='inner-container'>
					<span>Height</span>
					<span>{utils?.getHeightInFeetInches(height)}</span>
				</div>
				<div className='inner-container'>
					<span>Weight</span>
					<span>{utils?.getWeightInKgs(weight)}</span>
				</div>
			</div>
			<div className='mobile-wrapper'>
				<div className='inner-container'>
					<span>Gender(s)</span>
					<span>{genders?.toString().replace(',', ', ')}</span>
				</div>
				<div className='inner-container'>
					<span>Egg Groups</span>
					<span>{eggGroups?.toString().replace(',', ', ')}</span>
				</div>
			</div>
		</div>
	);
};

export default DataInfoMobile;
