import React from 'react';
import COLORS from '../../data/colors';
import './bubbleTexts.css';

const BubbleTexts = ({ data }) => {
	return (
		<div className='bubbles-container'>
			{data?.length
				? data?.map((item) => (
						<div
							key={item}
							className='bubble-wrapper'
							style={{ background: COLORS[item] }}
						>
							<span>{item}</span>
						</div>
				  ))
				: null}
		</div>
	);
};

export default BubbleTexts;
