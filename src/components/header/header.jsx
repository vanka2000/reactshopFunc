import React, { useEffect, useState } from 'react';
import './header.css'
import Burger from './burger/burger';
import Busket from '../busket/busket';
import { useSelector } from 'react-redux';

function Header (){
    const [visible, setVisible] = useState({searchState : 'no-visible', openBurger : 'no-visible', })
    const [busket, setBusket] = useState('no-visible')

    function mouseOutHeader(){                                     //- метод , скрывает наш инпут в хедере
        setVisible(visible.searchState === 'no-visible' 
            ? {searchState : '', openBurger : '', } 
            : {searchState : 'no-visible', openBurger : 'no-visible', })         
    }

    function getBusket(){
          setBusket(busket === 'no-visible' ? '' : 'no-visible')
    }

    const cards = useSelector((state) => state.busket.value)

    return <header  className='header' >               
        <div onClick={mouseOutHeader} className='header-conteiner'>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
        <Burger className={visible}/>
        <a href='main' className='logo'>МОЁ</a>
        {/* <Link to={main}>МОЁ</Link> */}
        <div className={`header-conteiner-last ${visible.searchState}`}>
            <input className='input_search'/>
            <button className='btn-search'>Найти</button>
        </div>
        <div className='busket_icon' onClick={getBusket} >
            <div className='busket_icon_sum'>{cards.length}</div>
        </div>
        <Busket busket={busket}/>
    </header>
}


 export default Header