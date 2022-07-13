
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
  var championArray = ["hi"];
  const [unchangedChampionArray, setUnchangedChampionArray] = useState([]);
  const [everyChampionNameArray, setEveryChampionNameArray] = useState([]);
  const [unchangedArrayOfArrays, setUnchangedArrayOfArrays] = useState([]);

  function createEveryChampionArray(){
    axios.get("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
					.then(function (response) {

            let entries = Object.entries(response.data.data);


            for(let i = 0; i < entries.length; i++){
              let championEntry = entries[i][0];
              let championNameEntry = entries[i][1].name.toLowerCase().replace(/ /g,"").replace("'", "");

              setUnchangedArrayOfArrays(oldArray => [...oldArray, [championEntry, championNameEntry]]);
              setEveryChampionArray(oldArray => [...oldArray, [championEntry, championNameEntry]]);



            }




					})
					.catch(function (error) {
						// handle error
					})
					.then(function () {
						// always executed

					});
  }

function createArrayOfArrays(){
  let arrayOfArrays = [];

}

useEffect(()=>{
createEveryChampionArray();




}, []);
useEffect(()=>{
console.log(unchangedArrayOfArrays)



}, [everyChampionArray]);












  function handleKeyPress(e){
		if(e.key === "Enter"){

		}
	}

  function handleChange(e){
		setSearchText(e.target.value.toLowerCase().replace(/ /g,"").replace("'", ""));
    console.log(e.target.value.toLowerCase().replace(/ /g,"").replace("'", ""));

  if(e.target.value === ""){
    var result = unchangedArrayOfArrays;
    setEveryChampionArray(result);
    console.log(everyChampionArray);
  }else{
    var result = unchangedArrayOfArrays.filter(champion => champion[1].includes(e.target.value.toLowerCase().replace(/ /g,"").replace("'", "")));
    setEveryChampionArray(result);
  }
;




	}

  function searchForChampion(){

    if(everyChampionArray.length === 1){
      document.getElementById("championSelectBackgroundDiv").style.display="none";
      document.getElementById("logo").style.display="none";
      document.getElementById("cardDiv").style.display="block";
      document.getElementById("searchID").style.marginTop="10px";



      console.log("You searched for " + everyChampionArray[0][0]);
      axios.get("https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/" + everyChampionArray[0][0] + ".json") //obj.id is used because it is address friendly version of names like Kog 'Maw
  					.then(function (response) {
  						// let champ = eval("response.data.data." + obj.id)
              console.log(response.data.data);
              let champ = eval("response.data.data." + everyChampionArray[0][0]);
              setQImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[0].image.full);
              setWImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[1].image.full);
              setEImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[2].image.full);
              setRImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[3].image.full);
              setPassiveImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/passive/" + champ.passive.image.full);
              setChampionImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + everyChampionArray[0][0] + ".png");
              setChampionName(everyChampionArray[0][0]);






  					})
  					.catch(function (error) {
  						// handle error
  						console.log(error);
  					})
  					.then(function () {
  						// always executed
  					});
    }else{
      console.log("Array length is not 1 and we're not sure what champion you want.")
    }

  }

  function searchByClick(champion){
    document.getElementById("cardDiv").style.display="block";
    document.getElementById("championSelectBackgroundDiv").style.display="none";
    document.getElementById("logo").style.display="none";
    document.getElementById("searchID").style.marginTop="10px";


    console.log("You searched for " + champion);
    axios.get("https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/" + champion + ".json") //obj.id is used because it is address friendly version of names like Kog 'Maw
          .then(function (response) {
            // let champ = eval("response.data.data." + obj.id)
            console.log(response.data.data);
            let champ = eval("response.data.data." + champion);
            setQImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[0].image.full);
            setWImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[1].image.full);
            setEImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[2].image.full);
            setRImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/" + champ.spells[3].image.full);
            setPassiveImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/passive/" + champ.passive.image.full);
            setChampionImage("https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + champion + ".png");
            setChampionName(champion);






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
  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




  return <div className="container g-0" id="page1">


    <div id="logo"><h1 className="logo">League Tools</h1></div>

    <div id="searchID" className="centerSizeSearch">
		<div class="page1SearchBar my-input-group input-group mb-3">

			<input onKeyPress={handleKeyPress} onChange={handleChange} spellcheck="false" type="text" class="page1SearchInput searchInput form-control" placeholder="Champion Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button  onClick={event => searchForChampion(event)} class="searchButton  btn btn-light" type="button" id="button-addon2">Search</button>
		</div>
    </div>

    <div id="championSelectBackgroundDiv" style={{backgroundColor: "rgba(0, 0, 0, .7)"}}>
    <div className="championSelectImageDiv">

      {everyChampionArray.map(champion => <input  type="image" onClick={event => searchByClick(champion[0])} src={"https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/" + champion[0] + ".png"} name="saveForm" class="championSelectImage" />)}


    </div>
    </div>

    <div className="page1CardDiv" id="cardDiv">
    <ChampionCard championName={championName} championImage={championImage} qImage={qImage} wImage={wImage} eImage={eImage} rImage={rImage} passiveImage={passiveImage}/>
    </div>





	</div>
}
export default Page1;

// onClick={event => searchByClick(champion[0])}

// <div class="input-group mb-3">
//   <input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
//   <button onClick={event => searchForPlayer(event)} class="btn btn-light btn-outline-secondary" type="button" id="button-addon2">Search</button>
// </div>
