import React, { useState, useEffect } from 'react';
import utils from '../../utils/utils';
import './readMore.css';

const ReadMore = ({ content, setIsPopUpVisible }) => {
	const [modifiedText, setModifiedText] = useState('');
	const DESKTOP_LIMITED_TEXT_LENGTH = 450;
	const MOBILE_LIMITED_TEXT_LENGTH = 115;

	useEffect(() => {
		const limitedLength = utils?.isMobile()
			? MOBILE_LIMITED_TEXT_LENGTH
			: DESKTOP_LIMITED_TEXT_LENGTH;
		if (content?.length > limitedLength) {
			setModifiedText(content?.substring(0, limitedLength));
		}
	}, [content, content?.length]);

	const handleReadMoreClick = () => {
		setIsPopUpVisible(true);
	};

	return (
		<>
			<div className='read-more'>
				<span>{modifiedText}</span>
				{' . . . '}
				<span onClick={handleReadMoreClick}>read more</span>
			</div>
		</>
	);
};

export default ReadMore;
