
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page1.css";
import ChampionCard from "./ChampionCard";
const axios = require("axios");

function Page1() {

  const [searchText, setSearchText] = useState("");
  const [championName, setChampionName] = useState("");
  const [championImage, setChampionImage] = useState("");
  const [qImage, setQImage]= useState("");
  const [wImage, setWImage]= useState("");
  const [eImage, setEImage]= useState("");
  const [rImage, setRImage]= useState("");
  const [passiveImage, setPassiveImage]= useState("");

  function handleKeyPress(e){
		if(e.key === "Enter"){

		}
	}

  function handleChange(e){
		setSearchText(e.target.value)

	}

  function searchForChampion(){
    document.getElementById("cardDiv").style.display="block";

    console.log("You searched for " + searchText);
    axios.get("https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/" + searchText + ".json") //obj.id is used because it is address friendly version of names like Kog 'Maw
					.then(function (response) {
						// let champ = eval("response.data.data." + obj.id)
            console.log(response.data.data);
            let champ = eval("response.data.data." + searchText);
            setQImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[0].image.full);
            setWImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[1].image.full);
            setEImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[2].image.full);
            setRImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[3].image.full);
            setPassiveImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/passive/" + champ.passive.image.full);
            setChampionImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + searchText + ".png");
            setChampionName(searchText);






					})
					.catch(function (error) {
						// handle error
						console.log(error);
					})
					.then(function () {
						// always executed
					});
  }

  function handleKeyPress(e){
		if(e.key === "Enter"){
			searchForChampion();
		}
	}



  return <div className="container g-0" id="page1">





		<div class="input-group mb-3">
			<input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="form-control" placeholder="Champion Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button  onClick={event => searchForChampion(event)} class="btn btn-light btn-outline-secondary" type="button" id="button-addon2">Search</button>
		</div>
    <div id="cardDiv">
    <ChampionCard championName={championName} championImage={championImage} qImage={qImage} wImage={wImage} eImage={eImage} rImage={rImage} passiveImage={passiveImage}/>
    </div>





	</div>
}
export default Page1;

// <div class="input-group mb-3">
//   <input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
//   <button onClick={event => searchForPlayer(event)} class="btn btn-light btn-outline-secondary" type="button" id="button-addon2">Search</button>
// </div>
