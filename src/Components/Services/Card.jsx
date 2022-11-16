import React from "react";
import "./card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <span style={{'font-size':'5rem','color':'var(--orange)'}}>{emoji}</span>
      <span>{heading}</span>
      <span>{detail}</span>
     
    </div>
  );
};

export default Card;
