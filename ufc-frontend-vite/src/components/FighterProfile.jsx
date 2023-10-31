import axios from "axios";
import FighterHistory from "./FighterHistory";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function FighterProfile() {
	// Defining some values
		const [fighterData, setFighter] = useState(null)
		const { slug } = useParams()
		// use useEffect function
		useEffect(() => {
			// fecth data on an asyncronous way, with try and catch for better error handilng
			const fetchData = async () => {
				try {
					const response = await axios.get(`http://127.0.0.1:8000/api/fighters/${slug}/`);
					setFighter(response.data.fighter);
				} catch (error) {
					console.error("error at fetching data", error)
				}
			};
			fetchData();
		}, 
		[slug]
	);

	if (fighterData){
		return (

			<div className="fighter-container">
				<div className="fighter-hero">
					<div className="fighter-info">
						<div className="fighter-attrs">
							<h6>{fighterData.status}</h6>
							{fighterData.fighter_tag ? <h6>{fighterData.fighter_tag}</h6> : null}
							<h6>{fighterData.weight_division}</h6>
						</div>
						<h1>{fighterData.full_name}</h1>
						<h3>{fighterData.nickname}</h3>
						<p>Number of Fights: {fighterData.number_of_fights}</p>
						<p>Victories - {fighterData.victories}</p>
						<p>Losses - {fighterData.losses}</p>
						<p>Draws - {fighterData.draws}</p>
						<p>No Contest - {fighterData.no_contest}</p>
					</div>
					{/* <img src={fighterData.c_photo} alt="c_photo" /> */}
					<div className="image-container">
						<img src={fighterData.f_photo} alt="f_photo" />
					</div>
				</div>
				<FighterHistory />
				<div className="fighter-facts">
					<p>Birthdate: {fighterData.birthdate}</p>
					<p>Native City: {fighterData.native_city}</p>
					<p>Age: {fighterData.age}</p>
					<p>Reach: {fighterData.reach}</p>
					<p>Height: {fighterData.height}</p>
					<p>Leg Reach: {fighterData.leg_reach}</p>
					<p>Weight: {fighterData.weight}</p>
				</div>

			</div>
		)
	}else{
		return(
			<div>
				<h1>No data</h1>
			</div>
		)
	}
}

export default FighterProfile;