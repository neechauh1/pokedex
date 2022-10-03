import React, { useState, useEffect } from 'react';
import DetailsPage from '../../layouts/detailspage/DetailsPage';
import utils from '../../utils/utils';
import API from '../../apis';
import COLORS from '../../data/colors';
import './card.css';

const Card = ({
	pokemon,
	searchText,
	pokemonTypes,
	setPokemonTypes,
	selectedPokemonTypes,
	selectedPokemonGenders,
}) => {
	const [isDetailsPageVisible, setIsDetailsPageVisible] = useState(false);
	const [pokemonDetails, setPokemonDetails] = useState(null);
	const [pokemonBackground, setPokemonBackground] = useState(null);
	const [display, setDisplay] = useState({});

	useEffect(() => {
		fetchPokemonDetails();
	}, []);

	const onSearch = (searchText, id, name) => {
		if (!searchText) return true;

		const pokemonId = utils.getStringId(id);

		const isIdMatching = pokemonId?.toLowerCase()?.includes(searchText);
		const isNameMatching = name?.toLowerCase()?.includes(searchText);

		return isIdMatching || isNameMatching;
	};

	useEffect(() => {
		let isTypeSelected = false;
		let isGenderSelected = false;

		pokemon?.genders?.forEach((gender) => {
			isGenderSelected =
				isGenderSelected || selectedPokemonGenders?.includes(gender);
		});

		pokemonDetails?.types?.forEach((type) => {
			isTypeSelected =
				isTypeSelected || selectedPokemonTypes?.includes(type);
		});

		const searchResult = onSearch(
			searchText?.toLowerCase(),
			pokemonDetails?.id,
			pokemonDetails?.name
		);

		if (isTypeSelected && isGenderSelected && searchResult) {
			setDisplay({
				display: 'block',
			});
		} else {
			setDisplay({
				display: 'none',
			});
		}
	}, [
		selectedPokemonTypes,
		selectedPokemonGenders,
		searchText,
		pokemonDetails?.types,
		pokemonDetails?.id,
		pokemonDetails?.name,
	]);

	useEffect(() => {
		if (pokemonDetails?.types?.length) {
			const pokemonColors = pokemonDetails?.types?.map((type) => {
				return COLORS[type];
			});

			pokemonTypes.push(pokemonDetails?.types);
			setPokemonTypes(pokemonTypes);

			if (pokemonColors?.length === 1) {
				setPokemonBackground({ background: pokemonColors[0] });
			} else if (pokemonColors?.length === 2) {
				setPokemonBackground({
					backgroundImage: `linear-gradient(180deg, ${pokemonColors[0]} 0%, ${pokemonColors[1]} 100%)`,
				});
			}
		}
	}, [pokemonDetails?.types]);

	const fetchPokemonDetails = async () => {
		const result = await API?.getPokemonDetails(pokemon?.url);
		setPokemonDetails(result);
	};

	const handleCardClick = () => {
		setIsDetailsPageVisible(true);
	};

	return (
		<>
			{pokemonDetails ? (
				<>
					<div className='pokemon-card-container' style={display}>
						<div
							className='pokemon-card'
							style={pokemonBackground}
							onClick={handleCardClick}
						>
							<div className='pokemon-image'>
								<img
									src={pokemonDetails?.image}
									alt={pokemonDetails?.id}
								/>
							</div>
							<div className='pokemon-text pokemon-name'>
								<span>{pokemonDetails?.name}</span>
							</div>
							<div className='pokemon-text pokemon-id'>
								<span>
									{utils.getStringId(pokemonDetails?.id)}
								</span>
							</div>
						</div>
					</div>

					{isDetailsPageVisible ? (
						<DetailsPage
							pokemonId={pokemonDetails?.id}
							pokemonName={pokemonDetails?.name?.toUpperCase()}
							pokemonImage={pokemonDetails?.image}
							pokemonGenders={pokemon?.genders}
							pokemonHeight={pokemonDetails?.height}
							pokemonWeight={pokemonDetails?.weight}
							pokemonAbilities={pokemonDetails?.abilities}
							pokemonTypes={pokemonDetails?.types}
							pokemonBackground={pokemonBackground}
							setIsDetailsPageVisible={setIsDetailsPageVisible}
						/>
					) : null}
				</>
			) : null}
		</>
	);
};

export default Card;
