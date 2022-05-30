import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page0.css";

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
		<img src={image} alt=""  />
		<h1>{summonerIconCode}</h1>

		<button onClick={getImage}>Change Image</button>
	</div>
}
export default Page0;
