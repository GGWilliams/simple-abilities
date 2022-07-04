
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
  const [everyChampionArray, setEveryChampionArray]= useState([]);
  const arrayOfChampions = [];

  function createEveryChampionArray(){
    axios.get("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
					.then(function (response) {

            let entries = Object.entries(response.data.data);



            for(let i = 0; i < entries.length; i++){
              let championEntry = entries[i][0];
              setEveryChampionArray(oldArray => [...oldArray, championEntry]);
            }
















					})
					.catch(function (error) {
						// handle error

					})
					.then(function () {
						// always executed


					});

  }

useEffect(()=>{
createEveryChampionArray();

}, []);

useEffect(()=>{

console.log(everyChampionArray);
}, [everyChampionArray]);







  function handleKeyPress(e){
		if(e.key === "Enter"){

		}
	}

  function handleChange(e){
		setSearchText(e.target.value);


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

  //run fucntion on change to searchbar
  //fucntion takes what is in search bar and creates html





  return <div className="container g-0" id="page1">





		<div class="my-input-group input-group mb-3">
			<input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="searchInput form-control" placeholder="Champion Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button  onClick={event => searchForChampion(event)} class="searchButton  btn btn-light" type="button" id="button-addon2">Search</button>
		</div>

    <div>

      {everyChampionArray.map(champion => <h1>{champion}</h1>)}

      <input type="image" src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Aatrox.png" name="saveForm" class="btTxt submit" id="saveForm" />
    </div>

    <div className="page1CardDiv" id="cardDiv">
    <ChampionCard championName={championName} championImage={championImage} qImage={qImage} wImage={wImage} eImage={eImage} rImage={rImage} passiveImage={passiveImage}/>
    </div>





	</div>
}
export default Page1;

// <div class="input-group mb-3">
//   <input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
//   <button onClick={event => searchForPlayer(event)} class="btn btn-light btn-outline-secondary" type="button" id="button-addon2">Search</button>
// </div>
