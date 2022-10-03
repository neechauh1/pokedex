import React, { useState, useEffect, Fragment } from 'react';
import './optionMobile.css';

const OptionMobile = ({ label, options, selectedData, setSelectedData }) => {
	const [areOptionsVisible, setAreOptionsVisible] = useState(false);
	const [optionIcon, setOptionIcon] = useState('./images/plus.svg');

	useEffect(() => {
		if (areOptionsVisible) {
			setOptionIcon('./images/minus.svg');
		} else {
			setOptionIcon('./images/plus.svg');
		}
	}, [areOptionsVisible]);

	const handleOptionClick = () => {
		setAreOptionsVisible(!areOptionsVisible);
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
		<div className='option-mobile-container'>
			<div className='option-wrapper'>
				<div className='option-btn'>
					<span>{label}</span>
					<span>
						{selectedData?.length ? `(${selectedData[0]}` : '(None'}
						{selectedData?.length > 1 ? (
							<p className='bold'>
								&nbsp; {`+ ${selectedData?.length} More)`}
							</p>
						) : (
							')'
						)}
					</span>
					<div className='icon-wrapper' onClick={handleOptionClick}>
						<img src={optionIcon} alt='option-mobile-icon' />
					</div>
				</div>
				{areOptionsVisible ? (
					<div className='option-list-border'></div>
				) : null}
				{areOptionsVisible && options
					? options?.map((option, index) =>
							index % 2 === 0 ? (
								<Fragment key={index}>
									<div className='options-list'>
										<div className='options-two-col'>
											<label className='option-mobile'>
												<input
													onChange={e=>{}}
													type='checkbox'
													checked={selectedData?.includes(
														option
													)}
													onClick={() =>
														handleCheckboxClick(
															option
														)
													}
												/>
												<span>{option}</span>
											</label>
											{options[index + 1] ? (
												<label className='option-mobile'>
													<input
													    onChange={e=>{}}
														type='checkbox'
														checked={selectedData?.includes(
															options[index + 1]
														)}
														onClick={() =>
															handleCheckboxClick(
																options[
																	index + 1
																]
															)
														}
													/>
													<span>
														{options[index + 1]}
													</span>
												</label>
											) : null}
										</div>
									</div>
								</Fragment>
							) : null
					  )
					: null}
			</div>
		</div>
	);
};

export default OptionMobile;
