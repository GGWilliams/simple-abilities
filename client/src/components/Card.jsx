import React from "react";
import "./Card.css";

function Card(props) {
  return <div className="cardDiv">

      <div className="allAbilityDivs passiveDiv">
        <div className="imgDiv">
          <img className="img" src={props.championImage}/>
        </div>
        <div className="allTextDivs passiveTextDiv">
          <p className="allTextBackgrounds" >nner.</p>
        </div>





      </div>

      <div className="allAbilityDivs qDiv">
        <div className="imgDiv">
          <img className="img" src={props.qImage}/>
        </div>
        <div className="allTextDivs qTextDiv">
          <p className="allTextBackgrounds">testing</p>
        </div>
      </div>

      <div className="allAbilityDivs wDiv">
        <div className="imgDiv">
          <img className="img" src={props.wImage}/>
        </div>
        <div className="allTextDivs wTextDiv">
          <p className="allTextBackgrounds">Testing.</p>
        </div>

      </div>

      <div className="allAbilityDivs eDiv">
        <div className="imgDiv">
          <img className="img" src={props.eImage}/>
        </div>
        <div className="allTextDivs eTextDiv">
          <p className="allTextBackgrounds">Testing.</p>
        </div>

      </div>

      <div className="allAbilityDivs rDiv">
        <div className="imgDiv">
          <img className="img" src={props.rImage}/>
        </div>
        <div className="allTextDivs rTextDiv">
          <p className="allTextBackgrounds">Testing.</p>
        </div>

      </div>

    </div>
}
export default Card;
