import React from "react";
import './style.css';

const Button = ( {nazevTonu, funkce} ) => {
       return <button onClick={(e) => funkce(e.target.textContent)} type="button" className="kamen">{nazevTonu}</button>
}

export default Button;