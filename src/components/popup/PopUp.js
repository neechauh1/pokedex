import React from 'react';
import './popUp.css';

const PopUp = ({ data, setIsPopUpVisible }) => {
	return (
		<div className='popup-container'>
			<div className='popup-text'>
				<span>{data}</span>
			</div>
			<div className='popup-close-icon'>
				<img
					src='./images/simple-cross.svg'
					alt='cross-icon'
					onClick={() => setIsPopUpVisible(false)}
				/>
			</div>
		</div>
	);
};

export default PopUp;
