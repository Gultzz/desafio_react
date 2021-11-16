import React from 'react';

import Logo from './img/logo.png';
import HeartWhite from './img/heartWhite.png';
import Search from './img/search.png';

import './Header.css';

let callFora;
const Header = ({ setIV, inputValue, callApi, setCategoria, setCategoriaView, callFavorites }) => {
    callFora = callApi;
    return (
        <div className="header">
            <div className="left">
                <button className="btnLogo"><img className="imgLogo" src={Logo} /></button>
                <button className="link" onClick={
                    () => {
                        setCategoria('anime');
                        setCategoriaView('Anime');
                    }
                }>ANIME</button>
                <button className="link" onClick={
                    () => {
                        setCategoria('manga');
                        setCategoriaView('Manga');
                    }
                }>MANGA</button>
            </div>
            <div className="right">
                <input className="inputSearch" type="text" value={inputValue} onChange={r => {
                    setIV(r.target.value);
                }} />
                <button className="btn" onClick={() => callApi()}><img className="search" src={Search} /></button>
                <button className="favoritos" onClick={() => { callFavorites() }}><img className="icons" src={HeartWhite} /></button>
            </div>
        </div>
    )
};

document.body.addEventListener('keypress', (letter) => {
    if (letter.keyCode === 13) {
        callFora();
    }
});

export default Header;