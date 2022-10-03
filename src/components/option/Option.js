import React, { useState } from 'react';
import './option.css';

const Option = ({ label, data, selectedData, setSelectedData }) => {
	const [isOptionActive, setIsOptionActive] = useState(false);
	const handleOptionClick = () => {
		setIsOptionActive(!isOptionActive);
	};

	const handleCheckboxClick = (item) => {
		const idx = selectedData?.indexOf(item);
		if (idx === -1) {
			setSelectedData([...selectedData, item]);
		} else {
			const newSelectedData = selectedData?.filter(
				(data) => data !== item
			);
			setSelectedData(newSelectedData);
		}
	};

	return (
		<div className='option-container'>
			<div className='option-label'>
				<span>{label}</span>
			</div>
			<div
				className={`option-btn ${isOptionActive ? 'white-class' : ''}`}
				onClick={handleOptionClick}
			>
				<button aria-label='optionbutton' className={`${isOptionActive ? 'white-class' : ''}`}>
					<span>{selectedData?.length ? selectedData[0] : ''}</span>{' '}
					<span className='btn-more-text'>
						{selectedData?.length > 1
							? `+ ${selectedData?.length - 1} More`
							: ''}
					</span>
				</button>
				<i className='arrow'></i>
			</div>
			{isOptionActive && data?.length ? (
				<div className='list'>
					{data?.map((item) => (
						<label className='option' key={item}>
							<input
								type='checkbox'
								checked={
									selectedData?.indexOf(item) === -1
										? false
										: true
								}
								onClick={() => handleCheckboxClick(item)}
							/>
							<span>{item}</span>
						</label>
					))}
				</div>
			) : null}
		</div>
	);
};

export default Option;
