
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Page1.css";
const axios = require("axios");

function Page1() {
  return <div className="container g-0" id="page1">






		<div class="input-group mb-3">
			<input type="text" class="form-control" placeholder="Champion Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
			<button  class="btn btn-light btn-outline-secondary" type="button" id="button-addon2">Search</button>
		</div>





	</div>
}
export default Page1;

// <div class="input-group mb-3">
//   <input onKeyPress={handleKeyPress} onChange={handleChange} type="text" class="form-control" placeholder="Summoner Name..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
//   <button onClick={event => searchForPlayer(event)} class="btn btn-light btn-outline-secondary" type="button" id="button-addon2">Search</button>
// </div>
