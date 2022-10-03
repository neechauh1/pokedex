import './header.css';
import React from 'react';

const Header = () => {
	return (
		<header>
			<div className='header-container'>
				<div className='title'>
					<span>Pokédex</span>
				</div>
				<div className='subtitle'>
					Search for any Pokémon that exists on the planet
				</div>
			</div>
		</header>
	);
};

export default Header;
