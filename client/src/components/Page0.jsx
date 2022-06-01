import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page0.css";
import Card from "./Card";

const axios = require("axios");

function Page0(){

	const [image, setImage] = useState("https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Azir.png");
	const [summonerIconCode, setSummonerIconCode] = useState("testing");

	const getImage = () => {

		setImage("https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png")

	}

	axios.get("http://localhost:3001/participants")
	.then(function (response) {
		setSummonerIconCode(response.data.participants[0].summonerName);
		console.log(response.data.participants[0].summonerName);
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.then(function () {
		// always executed
	});


	return <div className="container">

		<div class="input-group mb-3">
			<input type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
		</div>

		<div class="row justify-content-center">
			<div class="gy-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-9 rowChild">
				<Card championName="Annie" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-9 rowChild">
				<Card championName="Azir" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Azir.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-9 rowChild">
				<Card championName="Annie" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-9 rowChild">
				<Card championName="Azir" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Azir.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-9 rowChild">
				<Card championName="Annie" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png"/>
			</div>
		</div>
	</div>
}
export default Page0;
