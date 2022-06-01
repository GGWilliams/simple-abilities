import React from "react";
import "./Card.css";

function Card(props) {
  return <div className="cardDiv">

      <div className="passiveDiv">
        <div className="imgDiv">
          <img className="img" src={props.img}/>
        </div>
        <div className="passiveTextDiv">
          <p className="testing" >This text can be made smaller and the space between lines can be made thinner.</p>
        </div>





      </div>

      <div className="qDiv">
        <div className="imgDiv">
          <img className="img" src={props.img}/>
        </div>
        <div className="qTextDiv">
          <p >testing</p>
        </div>
      </div>

      <div className="wDiv">
        <div className="imgDiv">
          <img className="img" src={props.img}/>
        </div>
        <div className="wTextDiv">
          <p>Testing.</p>
        </div>

      </div>

      <div className="eDiv">
        <div className="imgDiv">
          <img className="img" src={props.img}/>
        </div>
        <div className="eTextDiv">
          <p>Testing.</p>
        </div>

      </div>

      <div className="rDiv">
        <div className="imgDiv">
          <img className="img" src={props.img}/>
        </div>
        <div className="rTextDiv">
          <p>Testing.</p>
        </div>

      </div>

    </div>
}
export default Card;

//style={{textAlign: "center"}}
// <h2>{props.championName}</h2>
// <img src={props.img}/>
// <h5>Summoner Name</h5>
