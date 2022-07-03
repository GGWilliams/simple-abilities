import React from "react";
import "./ChampionCard.css";

function ChampionCard(props) {
  return <div className="cardDivParent">
  <div className="cardDiv">
      <div className="imageAndNameDiv" style={{textAlign: "center"}}>
        <img style={{borderStyle: "solid", borderColor: props.borderColor}} className="page1ChampionImage" src={props.championImage}/>
        <div className="namePlate">
        <h4>{props.championName}</h4>
        </div>


      </div>



      <div className="allAbilityDivs qDiv">
        <div className="imgDiv">
          <img style={{borderStyle: "solid", borderColor: props.borderColor}} className="img" src={props.qImage}/>
        </div>
        <div style={{borderStyle: "solid", borderColor: props.borderColor}} className="allTextDivs qTextDiv">
          <p className="allTextBackgrounds">testing</p>
        </div>
      </div>

      <div className="allAbilityDivs wDiv">
        <div className="imgDiv">
          <img style={{borderStyle: "solid", borderColor: props.borderColor}} className="img" src={props.wImage}/>
        </div>
        <div style={{borderStyle: "solid", borderColor: props.borderColor}} className="allTextDivs wTextDiv">
          <p className="allTextBackgrounds">Testing.</p>
        </div>

      </div>

      <div className="allAbilityDivs eDiv">
        <div className="imgDiv">
          <img style={{borderStyle: "solid", borderColor: props.borderColor}} className="img" src={props.eImage}/>
        </div>
        <div style={{borderStyle: "solid", borderColor: props.borderColor}}  className="allTextDivs eTextDiv">
          <p className="allTextBackgrounds">Testing.</p>
        </div>

      </div>

      <div className="allAbilityDivs rDiv">
        <div className="imgDiv">
          <img style={{borderStyle: "solid", borderColor: props.borderColor}} className="img" src={props.rImage}/>
        </div>
        <div style={{borderStyle: "solid", borderColor: props.borderColor}} className="allTextDivs rTextDiv">
          <p className="allTextBackgrounds">Testing.</p>
        </div>

      </div>

      <div className="allAbilityDivs passiveDiv">
        <div className="imgDiv">
          <img style={{borderStyle: "solid", borderColor: props.borderColor}} className="img" src={props.passiveImage}/>
        </div>
        <div style={{borderStyle: "solid", borderColor: props.borderColor}} className="allTextDivs passiveTextDiv">
          <p className="allTextBackgrounds" >nner.</p>
        </div>





      </div>

    </div>
  </div>
}
export default ChampionCard;
