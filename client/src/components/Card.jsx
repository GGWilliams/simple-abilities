import React from "react";

function Card(props) {
  return <div class= "card" >
      <div class="card-header" style={{textAlign: "center"}}>
        <h2>{props.championName}</h2>
        <img src={props.img}/>
        <h5>Summoner Name</h5>
      </div>
      <div class="card-body">
        <p>Q: The truth is that this could actually have quite a bit of text here. A single ability might be as long as a few sentences. Even if they are summerized.</p>
        <p>W: One True King.</p>
        <p>E: This is a test.</p>
        <p>R: One True King.</p>

      </div>

    </div>
}
export default Card;
