import './main.css';
import Cards from "../cards/cards";
import {objJson,objTitle} from "../source/api";
import { useSelector } from "react-redux";


export default function Main (){

    const category = useSelector((state) => state.category.value)

    return <main>
        <h1 className="main_title">{objTitle[category]}</h1>
        <div className="main_container">
            {objJson[category].map((item,index) => <Cards data = {item} key={index}/>)}
        </div>
    </main>
    
}

