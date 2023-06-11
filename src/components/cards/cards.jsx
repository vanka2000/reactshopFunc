import React from "react";
import './cards.css';
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/busketService/busketService";

function Cards ({data}){

    const dispatch = useDispatch()
    
    function addBusket(){
        dispatch(addCard(data))
    }

    return  <div className="main_card">
        <div className="main_card_img" style={{backgroundImage: `url(${data.img})`}}></div>
        <div className="main_card_container">
            <p className="main_card_price">{data.price}p.</p>
            <p className="main_card_title">{data.name}</p>
            <button className="main_card_buy" onClick={addBusket}>Add to basket</button>
        </div>
       
    </div>
    
}
export default Cards;
