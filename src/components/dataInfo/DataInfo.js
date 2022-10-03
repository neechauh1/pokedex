import React from 'react';
import utils from '../../utils/utils';
import './dataInfo.css';

const DataInfo = ({ height, weight, genders, eggGroups }) => {
	return (
		<div className='data-info-container'>
			<div className='inner-container'>
				<span>Height</span>
				<span>{utils?.getHeightInFeetInches(height)}</span>
			</div>
			<div className='inner-container'>
				<span>Weight</span>
				<span>{utils?.getWeightInKgs(weight)}</span>
			</div>
			<div className='inner-container'>
				<span>Gender(s)</span>
				<span>{genders?.toString().replace(',', ', ')}</span>
			</div>
			<div className='inner-container'>
				<span>Egg Groups</span>
				<span>{eggGroups?.toString().replace(',', ', ')}</span>
			</div>
		</div>
	);
};

export default DataInfo;
