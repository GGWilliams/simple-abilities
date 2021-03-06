import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page0.css";
import Card from "./Card";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


const axios = require("axios");

function Page0(){
	const redTeamBorder = "#b91017";
	const blueTeamBorder = "#2d6ada";
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
	const [redTeamPassiveImages, setRedTeamPassiveImages] = useState([]);
	const [redTeamChampionNames, setRedTeamChampionNames] = useState([]);

	const [blueTeamChampionImages, setBlueTeamChampionImages] = useState([]);
	const [blueTeamQImages, setBlueTeamQImages] = useState([]);
	const [blueTeamWImages, setBlueTeamWImages] = useState([]);
	const [blueTeamEImages, setBlueTeamEImages] = useState([]);
	const [blueTeamRImages, setBlueTeamRImages] = useState([]);
	const [blueTeamPassiveImages, setBlueTeamPassiveImages] = useState([]);
	const [blueTeamChampionNames, setBlueTeamChampionNames] = useState([]);



	const [qImages, setQImages] =useState([]);
	const [wImages, setWImages] =useState([]);
	const [eImages, setEImages] =useState([]);
	const [rImages, setRImages] =useState([]);
	const [passiveImages, setPassiveImages] =useState([]);

	const [championKeys, setChampionKeys] = useState([]);

	const [regionTitle, setRegionTitle] = useState("NA");
	const [regionValue, setRegionValue] = useState("na1_");









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

					axios.get("https://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion/" + obj.id + ".json") //obj.id is used because it is address friendly version of names like Kog 'Maw
					.then(function (response) {
						let champ = eval("response.data.data." + obj.id)
						console.log(champ);
						console.log(champ.spells[0].image.full);

						if(championTeam === 100){
							setBlueTeamQImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[0].image.full]);
							setBlueTeamWImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[1].image.full]);
							setBlueTeamEImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[2].image.full]);
							setBlueTeamRImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[3].image.full]);
							setBlueTeamPassiveImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/passive/" + champ.passive.image.full]);

							setBlueTeamChampionImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/" + obj.id + ".png"]);
							setBlueTeamChampionNames(oldArray => [...oldArray, obj.name])
							console.log("Champion obj.id = " + obj.id)
						}else{
							setRedTeamQImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[0].image.full]);
							setRedTeamWImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[1].image.full]);
							setRedTeamEImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[2].image.full]);
							setRedTeamRImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/" + champ.spells[3].image.full]);
							setRedTeamPassiveImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/passive/" + champ.passive.image.full]);
							setRedTeamChampionImages(oldArray => [...oldArray, "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/" + obj.id + ".png"]);
							setRedTeamChampionNames(oldArray => [...oldArray, obj.name])
						}

					})
					.catch(function (error) {
						// handle error
						console.log(error);
					})
					.then(function () {

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
		document.getElementById("logo").style.display="none";

		document.getElementById("page0SearchID").style.paddingTop="20px";
		document.getElementById("errorNotFound").style.display="none";
		document.getElementById("liveAbilities").style.display="none";
		document.getElementById("page0").style.height="3840px";



		console.log("You searched for " + searchText);
		setPlayerNameForErrorScreen(searchText);
		axios.get("http://localhost:3001/summonerName/" + regionValue + searchText)
		.then(function (response) {
			console.log(response.data);
			console.log("Id: " + response.data.id + " retrieved.");
										axios.get("http://localhost:3001/by-summoner/" + regionValue + response.data.id)
										.then(function (responseById) {


											if(responseById.data === "No bueno."){
												document.getElementById("errorNotFound").style.display="inline";
												document.getElementById("liveAbilities").style.display="none";
												document.getElementById("page0").style.height="3840px";
											}else{
												document.getElementById("errorNotFound").style.display="none";

												document.getElementById("page0").style.height="auto";

												setBlueTeamChampionImages([]);
												setRedTeamChampionImages([]);
												setBlueTeamChampionNames([]);
												setRedTeamChampionNames([]);
												setQImages([]);
												setWImages([]);
												setEImages([]);
												setRImages([]);
												setRedTeamPassiveImages([]);
												setBlueTeamPassiveImages([]);

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
											document.getElementById("liveAbilities").style.display="block";
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

	// <div class="input-group mb-3">
	//   <button class="btn btn-outline-secondary" type="button">Button</button>
	//   <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
	//     <option selected>Choose...</option>
	//     <option value="1">One</option>
	//     <option value="2">Two</option>
	//     <option value="3">Three</option>
	//   </select>
	// </div>


	function changeRegion(event){
		setRegionTitle(event.target.attributes.name.value);
		setRegionValue(event.target.attributes.value.value);



	}

	return <div className="container g-0" id="page0">




		<div id="logo"><h1 className="logo">League Tools</h1></div>

		<InputGroup id="page0SearchID" className="my-input-group mb-3">
				<SplitButton

				variant="light regionButton"
				title={regionTitle}
				id="segmented-button-dropdown-1"
			>
				<Dropdown.Item value="na1_" name="NA" onClick={changeRegion} href="#">North America</Dropdown.Item>
				<Dropdown.Item value="kr__" name="KR" onClick={changeRegion} href="#">Korea</Dropdown.Item>

			</SplitButton>
			<input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="page0SearchInput searchInput form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button onClick={event => searchForPlayer(event)} class="searchButton btn btn-light" type="button" id="button-addon2">Search</button>
		</InputGroup>




		<div id="errorNotFound">
			<h1>{playerNameForErrorScreen} is not currently in a live game.</h1>
		</div>
		<div id="liveAbilities" class="g-0">
			<div  class="row justify-content-center">


				<div class=" g-0 col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={blueTeamChampionNames[0]} borderColor={blueTeamBorder} championImage={blueTeamChampionImages[0]} qImage={blueTeamQImages[0]} wImage={blueTeamWImages[0]} eImage={blueTeamEImages[0]} rImage={blueTeamRImages[0] } passiveImage={blueTeamPassiveImages[0]}/>
				</div>
				<div class=" g-0  col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={blueTeamChampionNames[1]} borderColor={blueTeamBorder} championImage={blueTeamChampionImages[1]} qImage={blueTeamQImages[1]} wImage={blueTeamWImages[1]} eImage={blueTeamEImages[1]} rImage={blueTeamRImages[1]} passiveImage={blueTeamPassiveImages[1]}/>
				</div>
				<div class=" g-0  col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={blueTeamChampionNames[2]} borderColor={blueTeamBorder} championImage={blueTeamChampionImages[2]} qImage={blueTeamQImages[2]} wImage={blueTeamWImages[2]} eImage={blueTeamEImages[2]} rImage={blueTeamRImages[2]} passiveImage={blueTeamPassiveImages[2]}/>
				</div>
				<div class=" g-0  col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={blueTeamChampionNames[3]} borderColor={blueTeamBorder} championImage={blueTeamChampionImages[3]} qImage={blueTeamQImages[3]} wImage={blueTeamWImages[3]} eImage={blueTeamEImages[3]} rImage={blueTeamRImages[3]} passiveImage={blueTeamPassiveImages[3]}/>
				</div>
				<div class=" g-0  col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={blueTeamChampionNames[4]} borderColor={blueTeamBorder} championImage={blueTeamChampionImages[4]} qImage={blueTeamQImages[4]} wImage={blueTeamWImages[4]} eImage={blueTeamEImages[4]} rImage={blueTeamRImages[4]} passiveImage={blueTeamPassiveImages[4]}/>
				</div>


			</div>

			<div class="row justify-content-center">

				<div class="g-0 col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={redTeamChampionNames[0]} borderColor={redTeamBorder} championImage={redTeamChampionImages[0]} qImage={redTeamQImages[0]} wImage={redTeamWImages[0]} eImage={redTeamEImages[0]} rImage={redTeamRImages[0]} passiveImage={redTeamPassiveImages[0]}/>
				</div>
				<div class="g-0  col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={redTeamChampionNames[1]} borderColor={redTeamBorder} championImage={redTeamChampionImages[1]} qImage={redTeamQImages[1]} wImage={redTeamWImages[1]} eImage={redTeamEImages[1]} rImage={redTeamRImages[1]} passiveImage={redTeamPassiveImages[1]}/>
				</div>
				<div class="g-0  col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={redTeamChampionNames[2]} borderColor={redTeamBorder} championImage={redTeamChampionImages[2]} qImage={redTeamQImages[2]} wImage={redTeamWImages[2]} eImage={redTeamEImages[2]} rImage={redTeamRImages[2]} passiveImage={redTeamPassiveImages[2]}/>
				</div>
				<div class="g-0  col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={redTeamChampionNames[3]} borderColor={redTeamBorder} championImage={redTeamChampionImages[3]} qImage={redTeamQImages[3]} wImage={redTeamWImages[3]} eImage={redTeamEImages[3]} rImage={redTeamRImages[3]} passiveImage={redTeamPassiveImages[3]}/>
				</div>
				<div class="g-0 col-xxl-4 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-9 rowChild">
					<Card championName={redTeamChampionNames[4]} borderColor={redTeamBorder} championImage={redTeamChampionImages[4]} qImage={redTeamQImages[4]} wImage={redTeamWImages[4]} eImage={redTeamEImages[4]} rImage={redTeamRImages[4]} passiveImage={redTeamPassiveImages[4]}/>
				</div>
			</div>

		</div>



	</div>

}
export default Page0;
