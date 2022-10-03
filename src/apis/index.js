import axios from 'axios';
import utils from '../utils/utils';

const POKEMONS = 'https://pokeapi.co/api/v2/pokemon';
const POKEMONS_GENDER = 'https://pokeapi.co/api/v2/gender';
const POKEMONS_BY_GENDER = 'https://pokeapi.co/api/v2/gender/';
const POKEMONS_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/';
const POKEMONS_STRENGTH_WEAKNESS = 'https://pokeapi.co/api/v2/type/';

const API = {
	getPokemons: async () => {
		const result = await axios?.get(POKEMONS);
		const [female, male, genderless] = await Promise.allSettled([
			API.getPokemonsByGender('1'),
			API.getPokemonsByGender('2'),
			API.getPokemonsByGender('3'),
		]);

		const pokemonData = result?.data?.results?.map((item) => {
			const genders = [];
			female?.value?.includes(item?.name) && genders.push('female');
			male?.value?.includes(item?.name) && genders.push('male');
			genderless?.value?.includes(item?.name) &&
				genders.push('genderless');

			return {
				url: item?.url,
				genders: genders,
			};
		});

		return pokemonData;
	},

	getGenders: async () => {
		const result = await axios?.get(POKEMONS_GENDER);
		const pokemonGenders = result?.data?.results?.map((item) => item?.name);

		return pokemonGenders;
	},

	getPokemonsByGender: async (gender) => {
		const result = await axios?.get(`${POKEMONS_BY_GENDER}${gender}`);
		const pokemons = result?.data?.pokemon_species_details?.map(
			(species) => species?.pokemon_species?.name
		);

		return pokemons;
	},

	getPokemonDetails: async (pokemonUrl) => {
		const result = await axios?.get(pokemonUrl);

		return {
			id: result?.data?.id,
			name: result?.data?.name,
			image: result?.data?.sprites?.other?.dream_world?.front_default,
			types: result?.data?.types?.map((item) => item?.type?.name),
			height: result?.data?.height,
			weight: result?.data?.weight,
			abilities: result?.data?.abilities?.map(
				(item) => item?.ability?.name
			),
			types: result?.data?.types?.map((item) => item?.type?.name),
		};
	},

	getPokemonStrengthAndWeakness: async (id) => {
		const result = await axios?.get(`${POKEMONS_STRENGTH_WEAKNESS}${id}`);
		const weaknesses =
			result?.data?.damage_relations?.double_damage_from?.map(
				(item) => item?.name
			);

		return weaknesses;
	},

	getPokemonSpeciesDetails: async (id) => {
		const result = await axios?.get(`${POKEMONS_SPECIES}${id}`);
		const data = {
			eggGroups: result?.data?.egg_groups?.map((group) => group?.name),
			description: result?.data?.flavor_text_entries?.reduce(
				(acc, entry) => {
					if (entry?.language?.name === 'en') {
						let text = entry?.flavor_text;
						text = text?.replaceAll('\n', ' ');
						text = text?.replaceAll('\f', ' ');

						if (!utils?.isStringsMatching(acc, text)) {
							acc += text;
						}
					}

					return acc;
				},
				''
			),
		};

		return data;
	},

	getPokemonSpecificData: async (id) => {
		const [species, weaknesses] = await Promise.allSettled([
			API?.getPokemonSpeciesDetails(id),
			API?.getPokemonStrengthAndWeakness(id),
		]);

		return {
			eggGroups: species?.value?.eggGroups,
			description: species?.value?.description,
			weaknesses: weaknesses?.value,
		};
	},
};

export default API;
