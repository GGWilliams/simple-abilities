import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page0.css";
import Card from "./Card";

const axios = require("axios");

function Page0(){

	const championDataArrayOfObjects = [];

	function championDataFromKey(entry){
		axios.get("http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json")
	  .then(function (response) {
	    let entries = Object.entries(response.data.data)

			entries.forEach(array => {
				championDataArrayOfObjects.push(array[1]);
			})
			let key = entry.toString();
			let obj = championDataArrayOfObjects.find(o => o.key === key);
			console.log(obj.name);


	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  })
	  .then(function () {
	    // always executed
	  });
	}






	const [searchText, setSearchText] = useState("");


	const [image, setImage] = useState("https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Azir.png");
	const [summonerIconCode, setSummonerIconCode] = useState("testing");
	const [participant0ChampionId, setParticipant0ChampionId] = useState("0");
	const [championImage, setChampionImage] = useState("");

	const getImage = () => {

		setImage("https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png")

	}

	function searchForPlayer(event){
		console.log("You searched for " + searchText);
		axios.get("http://localhost:3001/summonerName/" + searchText)
		.then(function (response) {

			console.log("Id: " + response.data.id + " retrieved.");
										axios.get("http://localhost:3001/by-summoner/" + response.data.id)
										.then(function (responseById) {

											console.log(responseById.data);

											setParticipant0ChampionId(responseById.data.participants[0].championId );


											var championKey = responseById.data.participants[0].championId;
											
											championDataFromKey(championKey);




										})
										.catch(function (error) {
											// handle error
											console.log(error);
										})
										.then(function () {

										});

		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});
	}



	return <div className="container">






		<div class="input-group mb-3">
			<input onChange={e => setSearchText(e.target.value)} type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button onClick={event => searchForPlayer(event)} class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
		</div>












		<div class="row justify-content-center">
			<div class="gy-3 col-xxl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
				<Card championName={participant0ChampionId} img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
				<Card championName="Azir" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Azir.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
				<Card championName="Annie" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
				<Card championName="Azir" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Azir.png"/>
			</div>
			<div class="gy-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
				<Card championName="Annie" img="https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png"/>
			</div>
		</div>
	</div>
}
export default Page0;
