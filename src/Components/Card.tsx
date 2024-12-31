import React from "react";
import "../styles.css";

interface CardProps {
  name: string;
  age: number;
  place: string;
}

const Card: React.FC<CardProps> = ({ name, age, place }) => {
  return (
    <div className="main-container">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>place: {place}</p>
    </div>
  );
};

export default Card;
