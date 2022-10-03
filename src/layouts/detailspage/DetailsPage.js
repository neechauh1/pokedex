import React, { useState, useEffect } from 'react';
import ReadMore from '../../components/readMore/ReadMore';
import DataInfo from '../../components/dataInfo/DataInfo';
import DataInfoMobile from '../../components/dataInfoMobile/DataInfoMobile';
import PopUp from '../../components/popup/PopUp';
import Specifications from '../../components/specifications/Specifications';
import SpecificationsMobile from '../../components/specificationsMobile/SpecificationsMobile';
import utils from '../../utils/utils';
import API from '../../apis';
import './detailspage.css';

const DetailsPage = ({
	pokemonId,
	pokemonName,
	pokemonImage,
	pokemonGenders,
	pokemonHeight,
	pokemonWeight,
	pokemonAbilities,
	pokemonTypes,
	pokemonBackground,
	setIsDetailsPageVisible,
}) => {
	const [speciesData, setSpeciesData] = useState(null);
	const [isPopUpVisible, setIsPopUpVisible] = useState(false);

	useEffect(() => {
		fetchPokemonSpecificData();
	}, []);

	const fetchPokemonSpecificData = async () => {
		const result = await API?.getPokemonSpecificData(pokemonId);
		setSpeciesData(result);
	};
	return (
		<div className='details-page-wrapper'>
			<div className='details-page-container'>
				<div className='section-top'>
					<div className='mobile-header'>
						<div className='mobile-name-id'>
							<span>{pokemonName}</span>
							<span>{utils.getStringId(pokemonId)}</span>
						</div>
						<div className='mobile-cross'>
							<img
								src='./images/cross.svg'
								alt='cross-icon'
								onClick={() => setIsDetailsPageVisible(false)}
							/>
						</div>
					</div>
					<div className='card-and-description-mobile'>
						<div className='card-box' style={pokemonBackground}>
							<div className='pokemon-image'>
								<img src={pokemonImage} alt='something' />
							</div>
						</div>
						<div className='pokemon-description'>
							<div className='description-header'>
								<span>{pokemonName}</span>
								<span>{utils.getStringId(pokemonId)}</span>
								<div className='cross-icon'>
									<img
										src='./images/cross.svg'
										alt='cross-icon'
										onClick={() =>
											setIsDetailsPageVisible(false)
										}
									/>
								</div>
							</div>
							<div className='description'>
								<ReadMore
									content={speciesData?.description}
									isPopUpVisible={isPopUpVisible}
									setIsPopUpVisible={setIsPopUpVisible}
								/>
							</div>
						</div>
					</div>
				</div>
				{!isPopUpVisible ? (
					<>
						<div className='section-middle'>
							{!utils?.isMobile() ? (
								<DataInfo
									height={pokemonHeight}
									weight={pokemonWeight}
									genders={pokemonGenders}
									eggGroups={speciesData?.eggGroups}
								/>
							) : (
								<DataInfoMobile
									height={pokemonHeight}
									weight={pokemonWeight}
									genders={pokemonGenders}
									eggGroups={speciesData?.eggGroups}
								/>
							)}
						</div>
						<div className='section-bottom'>
							{!utils?.isMobile() ? (
								<Specifications
									abilities={pokemonAbilities}
									types={pokemonTypes}
									weakAgainst={speciesData?.weaknesses}
								/>
							) : (
								<SpecificationsMobile
									abilities={pokemonAbilities}
									types={pokemonTypes}
									weakAgainst={speciesData?.weaknesses}
								/>
							)}
						</div>
					</>
				) : (
					<PopUp
						data={speciesData?.description}
						setIsPopUpVisible={setIsPopUpVisible}
					/>
				)}
			</div>
		</div>
	);
};

export default DetailsPage;
