import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
function Page0(){

	const [image, setImage] = useState("https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Azir.png");
	const getImage = () => {

		setImage("https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/Annie.png")

	}
	return <div className="container">
		<img src={image} alt=""  />
		<button onClick={getImage}>Change Image</button>
	</div>
}
export default Page0;
