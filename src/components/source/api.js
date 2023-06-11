// import axios from 'axios'
import json from './cardsTvoe.json'
import jsonManKurtki from './cardsKurtki.json'
import jsonManShoes from './cardsShoes.json'
import jsonManSportWear from './cardsSport.json'
import jsonManHomeWear from './cardsHome.json'


const objJson = {
    json : json,
    jsonManKurtki : jsonManKurtki,
    jsonManShoes : jsonManShoes,
    jsonManSportWear : jsonManSportWear,
    jsonManHomeWear : jsonManHomeWear,
}

const objTitle = {
    json : 'Главная',
    jsonManKurtki : 'Мужские куртки',
    jsonManShoes : 'Мужская обувь',
    jsonManSportWear : 'Мужские спорт костюмы',
    jsonManHomeWear : 'Мужская домашняя одежда',
}




export  {objJson, objTitle}

