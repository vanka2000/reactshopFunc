import { configureStore } from "@reduxjs/toolkit";
import  stateShop  from "./category/category";
import  busketCards  from "./busketService/busketService";


export default configureStore({
    reducer:{
        category : stateShop,
        busket: busketCards
    }
})