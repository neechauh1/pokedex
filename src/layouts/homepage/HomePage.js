import './homepage.css';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import SearchAndFilter from '../../components/searchAndFilter/SearchAndFilter';
import Card from '../../components/card/Card';
import MobileFilterPage from '../mobileFilterPage/MobileFilterPage';
import API from '../../apis';

const HomePage = () => {
	const [pokemons, setPokemons] = useState(null);
	const [pokemonTypes, setPokemonTypes] = useState([]);
	const [uniquePokemonTypes, setUniquePokemonTypes] = useState([]);
	const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
	const [pokemonGenders, setPokemonGenders] = useState([]);
	const [selectedPokemonGenders, setSelectedPokemonGenders] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [isMobileFilterPageVisible, setIsMobileFilterPageVisible] =
		useState(false);

	useEffect(() => {
		const seed = setTimeout(() => {
			const uniqueTypes = [];
			pokemonTypes?.forEach((pokemonType) => {
				pokemonType?.forEach((type) => {
					const idx = uniqueTypes?.indexOf(type);
					if (idx === -1) uniqueTypes.push(type);
				});
			});
			setUniquePokemonTypes(uniqueTypes);
			setSelectedPokemonTypes(uniqueTypes);
		}, 500);

		return () => clearTimeout(seed);
	}, [pokemonTypes, pokemonTypes?.length]);

	useEffect(() => {
		fetchPokemonsData();
	}, []);

	const fetchPokemonsData = async () => {
		const result = await API?.getPokemons();
		const genders = await API?.getGenders();
		setPokemons(result);
		setSelectedPokemonGenders(genders);
		setPokemonGenders(genders);
	};

	return (
		<div className='container'>
			{isMobileFilterPageVisible ? (
				<MobileFilterPage
					setIsMobileFilterPageVisible={setIsMobileFilterPageVisible}
					types={uniquePokemonTypes}
					genders={pokemonGenders}
					selctedTypes={selectedPokemonTypes}
					selectedGenders={selectedPokemonGenders}
					setSelectedTypes={setSelectedPokemonTypes}
					setSelectedGenders={setSelectedPokemonGenders}
				/>
			) : (
				<>
					<div className='header'>
						<Header />
					</div>
					<div className='search'>
						<SearchAndFilter
							searchText={searchText}
							setSearchText={setSearchText}
							types={uniquePokemonTypes}
							genders={pokemonGenders}
							selctedTypes={selectedPokemonTypes}
							selectedGenders={selectedPokemonGenders}
							setSelectedTypes={setSelectedPokemonTypes}
							setSelectedGenders={setSelectedPokemonGenders}
							setIsMobileFilterPageVisible={
								setIsMobileFilterPageVisible
							}
						/>
					</div>
					<div className='card-container'>
						{pokemons
							? pokemons.map((pokemon, index) => (
									<Card
										pokemon={pokemon}
										key={index}
										searchText={searchText}
										pokemonTypes={pokemonTypes}
										setPokemonTypes={setPokemonTypes}
										selectedPokemonTypes={
											selectedPokemonTypes
										}
										selectedPokemonGenders={
											selectedPokemonGenders
										}
									/>
							  ))
							: null}
					</div>
				</>
			)}
		</div>
	);
};

export default HomePage;
