import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page0.css";
import Card from "./Card";


const axios = require("axios");

function Page0(){

	const [searchText, setSearchText] = useState("");
	const [image, setImage] = useState("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Azir.png");
	const [summonerIconCode, setSummonerIconCode] = useState("testing");
	const [participant0ChampionId, setParticipant0ChampionId] = useState("0");
	const [championName, setChampionName] = useState("");
	const championNamesArray = []; //non useState array for console.log reasons

	var championKeysArray= []; //non useState array for console.log reasons

	const [championImages, setChampionImages] = useState([]);
	const [qImages, setQImages] =useState([]);
	const [wImages, setWImages] =useState([]);
	const [eImages, setEImages] =useState([]);
	const [rImages, setRImages] =useState([]);
	const [passiveImages, setPassiveImages] =useState([]);

	const [championKeys, setChampionKeys] = useState([]);







	function championDataFromKey(entry){
	  const championDataArrayOfObjects = [];
	  axios.get("http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json")
	  .then(function (response) {
	    let entries = Object.entries(response.data.data)

	    entries.forEach(array => {
	      championDataArrayOfObjects.push(array[1]);
	    })
	    let key = entry.toString();
	    let obj = championDataArrayOfObjects.find(o => o.key === key);

			championNamesArray.push(obj.name);

					axios.get("https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/" + obj.id + ".json") //obj.id is used because it is address friendly version of names like Kog 'Maw
					.then(function (response) {
						let champ = eval("response.data.data." + obj.id)
						console.log(champ.spells[0].image.full);
						setQImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[0].image.full]);
						setWImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[1].image.full]);
						setEImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[2].image.full]);
						setRImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[3].image.full]);

						setChampionImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + obj.id + ".png"]);
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
		document.getElementById("liveAbilities").style.display="inline";



		console.log("You searched for " + searchText);
		axios.get("http://localhost:3001/summonerName/" + searchText)
		.then(function (response) {

			console.log("Id: " + response.data.id + " retrieved.");
										axios.get("http://localhost:3001/by-summoner/" + response.data.id)
										.then(function (responseById) {

											console.log(responseById.data);

											setChampionImages([]);
											setQImages([]);
											setWImages([]);
											setEImages([]);
											setRImages([]);

											setChampionKeys([]);

											for(var i = 0; i <= 9; i++){
												var championKey = responseById.data.participants[i].championId;
												console.log(championKey);
												championDataFromKey(championKey);
												championKeysArray.push(championKey);

										}
										console.log(championKeysArray);
										console.log(championNamesArray);

										setChampionKeys(championKeysArray);







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







	return <div className="container">






		<div class="input-group mb-3">
			<input onChange={e => setSearchText(e.target.value)} type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button onClick={event => searchForPlayer(event)} class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
		</div>
		<div id="liveAbilities">
			<div class="row justify-content-center">


				<div class="gy-5 col-xxl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[0]} qImage={qImages[0]} wImage={wImages[0]} eImage={eImages[0]} rImage={rImages[0]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[1]} qImage={qImages[1]} wImage={wImages[1]} eImage={eImages[1]} rImage={rImages[1]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[2]} qImage={qImages[2]} wImage={wImages[2]} eImage={eImages[2]} rImage={rImages[2]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[3]} qImage={qImages[3]} wImage={wImages[3]} eImage={eImages[3]} rImage={rImages[3]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[4]} qImage={qImages[4]} wImage={wImages[4]} eImage={eImages[4]} rImage={rImages[4]}/>
				</div>

			<div class="row justify-content-center">

				<div class="gy-5 col-xxl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[5]} qImage={qImages[5]} wImage={wImages[5]} eImage={eImages[5]} rImage={rImages[5]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[6]} qImage={qImages[6]} wImage={wImages[6]} eImage={eImages[6]} rImage={rImages[6]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[7]} qImage={qImages[7]} wImage={wImages[7]} eImage={eImages[7]} rImage={rImages[7]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[8]} qImage={qImages[8]} wImage={wImages[8]} eImage={eImages[8]} rImage={rImages[8]}/>
				</div>
				<div class="gy-5 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-9 col-9 rowChild">
					<Card championImage={championImages[9]} qImage={qImages[9]} wImage={wImages[9]} eImage={eImages[9]} rImage={rImages[9]}/>
				</div>
			</div>


			</div>
		</div>


	</div>
}
export default Page0;
