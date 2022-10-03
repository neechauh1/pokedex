import React from 'react';
import BubbleTexts from '../bubbleTexts/BubbleTexts';
import './specificationsMobile.css';

const SpecificationsMobile = ({ abilities, types, weakAgainst }) => {
	return (
		<div className='spec-container-mobile'>
			<div className='abilities-and-types'>
				<div className='spec'>
					<span>Abilities</span>
					<span>{abilities?.toString()?.replace(',', ', ')}</span>
				</div>
				<div className='spec'>
					<span>Types</span>
					<BubbleTexts data={types} />
				</div>
			</div>
			<div className='spec'>
				<span>Weak Against</span>
				<BubbleTexts data={weakAgainst} />
			</div>
		</div>
	);
};

export default SpecificationsMobile;
