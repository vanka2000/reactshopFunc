import React from "react";
import './busket.css';
import BusketCard from "./busketCard";
import { useSelector } from "react-redux";

function Busket({busket}){

    const cards = useSelector((state) => state.busket.value)
    
    return (
        <div className={`busket ${busket}`}>
            {cards.map((item, index) => <BusketCard key={index} data={item}/>)}
        </div>
    )
}
export default Busket