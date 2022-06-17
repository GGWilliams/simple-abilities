import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page0.css";
import Card from "./Card";


const axios = require("axios");

function Page0(){

	const [playerNameForErrorScreen, setPlayerNameForErrorScreen]= useState("That summoner ");
	const [searchText, setSearchText] = useState("");
	const [image, setImage] = useState("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Azir.png");
	const [summonerIconCode, setSummonerIconCode] = useState("testing");
	const [participant0ChampionId, setParticipant0ChampionId] = useState("0");
	const [championName, setChampionName] = useState("");
	const championNamesArray = [];
	const blueTeamNamesArray = [];
	const redTeamNamesArray = []; //non useState array for console.log reasons

	var championKeysArray= []; //non useState array for console.log reasons

	const [redTeamChampionImages, setRedTeamChampionImages] = useState([]);
	const [redTeamQImages, setRedTeamQImages] = useState([]);
	const [redTeamWImages, setRedTeamWImages] = useState([]);
	const [redTeamEImages, setRedTeamEImages] = useState([]);
	const [redTeamRImages, setRedTeamRImages] = useState([]);

	const [blueTeamChampionImages, setBlueTeamChampionImages] = useState([]);
	const [blueTeamQImages, setBlueTeamQImages] = useState([]);
	const [blueTeamWImages, setBlueTeamWImages] = useState([]);
	const [blueTeamEImages, setBlueTeamEImages] = useState([]);
	const [blueTeamRImages, setBlueTeamRImages] = useState([]);



	const [qImages, setQImages] =useState([]);
	const [wImages, setWImages] =useState([]);
	const [eImages, setEImages] =useState([]);
	const [rImages, setRImages] =useState([]);
	const [passiveImages, setPassiveImages] =useState([]);

	const [championKeys, setChampionKeys] = useState([]);









	function championDataFromKey(entry, championTeam){
	  const championDataArrayOfObjects = [];
	  axios.get("http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json")
	  .then(function (response) {
	    let entries = Object.entries(response.data.data)

	    entries.forEach(array => {
	      championDataArrayOfObjects.push(array[1]);
	    })
	    let key = entry.toString();
	    let obj = championDataArrayOfObjects.find(o => o.key === key);

			if(championTeam === 100){
				blueTeamNamesArray.push(obj.id);
			}else{
				redTeamNamesArray.push(obj.id);
			}
			championNamesArray.push(obj.name);

					axios.get("https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/" + obj.id + ".json") //obj.id is used because it is address friendly version of names like Kog 'Maw
					.then(function (response) {
						let champ = eval("response.data.data." + obj.id)
						console.log(champ.spells[0].image.full);

						if(championTeam === 100){
							setBlueTeamQImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[0].image.full]);
							setBlueTeamWImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[1].image.full]);
							setBlueTeamEImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[2].image.full]);
							setBlueTeamRImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[3].image.full]);
							setBlueTeamChampionImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + obj.id + ".png"]);
						}else{
							setRedTeamQImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[0].image.full]);
							setRedTeamWImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[1].image.full]);
							setRedTeamEImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[2].image.full]);
							setRedTeamRImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[3].image.full])
							setRedTeamChampionImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + obj.id + ".png"]);
						}

					})
					.catch(function (error) {
						// handle error
						console.log(error);
					})
					.then(function () {
						// always executed
					});

			// console.log(qName);






			// setQImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/" + qName]);
			// setWImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/" + wName]);
			// setEImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/" + eName]);
			// setRImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/" + rName]);
			// setPassiveImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/" + passiveName]);

			// here we will set the spell images just like the above. make useStates for them. and then make props for them.








	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  })
	  .then(function () {
	    // always executed
	  });
	}







	const getImage = () => {

		setImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Annie.png")

	}

	function searchForPlayer(event){
		document.getElementById("errorNotFound").style.display="none";
		document.getElementById("liveAbilities").style.display="none";
		document.getElementById("page0").style.height="3840px";



		console.log("You searched for " + searchText);
		setPlayerNameForErrorScreen(searchText);
		axios.get("http://localhost:3001/summonerName/" + searchText)
		.then(function (response) {

			console.log("Id: " + response.data.id + " retrieved.");
										axios.get("http://localhost:3001/by-summoner/" + response.data.id)
										.then(function (responseById) {


											if(responseById.data === "No bueno."){
												document.getElementById("errorNotFound").style.display="inline";
												document.getElementById("liveAbilities").style.display="none";
												document.getElementById("page0").style.height="3840px";
											}else{
												document.getElementById("errorNotFound").style.display="none";
												document.getElementById("liveAbilities").style.display="inline";
												document.getElementById("page0").style.height="auto";

												setBlueTeamChampionImages([]);
												setRedTeamChampionImages([]);
												setQImages([]);
												setWImages([]);
												setEImages([]);
												setRImages([]);

												setChampionKeys([]);

												for(var i = 0; i <= 9; i++){
													var championKey = responseById.data.participants[i].championId;
													console.log(championKey);
													var championTeam = responseById.data.participants[i].teamId;
													championDataFromKey(championKey, championTeam);
													championKeysArray.push(championKey);

											}
											console.log(championKeysArray);
											console.log(championNamesArray);
											console.log(blueTeamNamesArray);
											console.log(redTeamNamesArray);

											setChampionKeys(championKeysArray);
											}











										}
									)
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

		});
	}

	function handleChange(e){
		setSearchText(e.target.value)

	}

	function handleKeyPress(e){
		if(e.key === "Enter"){
			searchForPlayer();
		}
	}






	return <div className="container g-0" id="page0">






		<div class="input-group mb-3">
			<input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button onClick={event => searchForPlayer(event)} class="btn btn-light btn-outline-secondary" type="button" id="button-addon2">Search</button>
		</div>
		<div id="errorNotFound">
			<h1>{playerNameForErrorScreen} is not currently in a live game.</h1>
		</div>
		<div id="liveAbilities" class="g-0">
			<div  class="row justify-content-center">


				<div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={blueTeamChampionImages[0]} qImage={blueTeamQImages[0]} wImage={blueTeamWImages[0]} eImage={blueTeamEImages[0]} rImage={blueTeamRImages[0]}/>
				</div>
				<div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={blueTeamChampionImages[1]} qImage={blueTeamQImages[1]} wImage={blueTeamWImages[1]} eImage={blueTeamEImages[1]} rImage={blueTeamRImages[1]}/>
				</div>
				<div class=" col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={blueTeamChampionImages[2]} qImage={blueTeamQImages[2]} wImage={blueTeamWImages[2]} eImage={blueTeamEImages[2]} rImage={blueTeamRImages[2]}/>
				</div>
				<div class=" col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={blueTeamChampionImages[3]} qImage={blueTeamQImages[3]} wImage={blueTeamWImages[3]} eImage={blueTeamEImages[3]} rImage={blueTeamRImages[3]}/>
				</div>
				<div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={blueTeamChampionImages[4]} qImage={blueTeamQImages[4]} wImage={blueTeamWImages[4]} eImage={blueTeamEImages[4]} rImage={blueTeamRImages[4]}/>
				</div>


			</div>

			<div class="row justify-content-center">

				<div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={redTeamChampionImages[0]} qImage={redTeamQImages[0]} wImage={redTeamWImages[0]} eImage={redTeamEImages[0]} rImage={redTeamRImages[0]}/>
				</div>
				<div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={redTeamChampionImages[1]} qImage={redTeamQImages[1]} wImage={redTeamWImages[1]} eImage={redTeamEImages[1]} rImage={redTeamRImages[1]}/>
				</div>
				<div class=" col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={redTeamChampionImages[2]} qImage={redTeamQImages[2]} wImage={redTeamWImages[2]} eImage={redTeamEImages[2]} rImage={redTeamRImages[2]}/>
				</div>
				<div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={redTeamChampionImages[3]} qImage={redTeamQImages[3]} wImage={redTeamWImages[3]} eImage={redTeamEImages[3]} rImage={redTeamRImages[3]}/>
				</div>
				<div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={redTeamChampionImages[4]} qImage={redTeamQImages[4]} wImage={redTeamWImages[4]} eImage={redTeamEImages[4]} rImage={redTeamRImages[4]}/>
				</div>
			</div>

		</div>



	</div>

}
export default Page0;
