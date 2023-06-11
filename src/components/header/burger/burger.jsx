import React, { useState } from "react";
import './burger.css';
import { useDispatch } from "react-redux";
import { SwitchCategory } from "../../../redux/category/category";

export default function Burger ({className}){

    const [ulMenu, setUlMenu] = useState({man : 'no-visible', woman : 'no-visible'})
    const dispatch = useDispatch()
    
    function showMenu(){
        setUlMenu({ man : '',  woman : 'no-visible'})
    }

    function noShowMenu(){
        setUlMenu({ man : 'no-visible',  woman : 'no-visible' })
    }

    function getCards(e){
        dispatch(SwitchCategory(e.target.dataset.cloth))
    }
        return (
            <section className={`burger ${className.openBurger}`}>
                <div className="burger_cont">
                    <div 
                    onMouseOver={showMenu} 
                    onMouseOut={noShowMenu} 
                    className={`burger_headname ${className.openBurger}`} >Мужчинам
                        <ul className={`ul ${ulMenu.man}`}> 
                            <li onClick={getCards} data-cloth ='jsonManKurtki' href="#">Верхняя одежда</li>
                            <li onClick={getCards} data-cloth ='jsonManShoes' href="#">Обувь</li>
                            <li onClick={getCards} data-cloth ='jsonManSportWear' href="#">Спорт одежда</li>
                            <li onClick={getCards} data-cloth ='jsonManHomeWear' href="#">Домашняя одежда</li>
                        </ul>
                    </div>
                </div>
                <div className="burger_cont">
                <div 
                // onMouseOver={showMenu}
                // onMouseOut={noShowMenu}
                className="burger_headname">Женщинам
                        <ul className={`ul ${ulMenu.woman}`}> 
                            <li>Верхняя одежда</li>
                            <li>Обувь</li>
                            <li>Спорт одежда</li>
                            <li>Куртки</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
