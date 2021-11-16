import React from 'react';

import Star from './img/star.png';
import HeartRed from './img/heartRed.png';

import './ItemInfo.css';

const ItemInfo = ({ style, pegarItemInfo, setStyleItemInfo, setFavoritos, favoritos }) => {
    return (
        <div style={style} className="center2" onClick={(e) => {
            if (e.target.className === 'center2') {
                setStyleItemInfo({ display: 'none' })
            }
        }}>
            <div className="infos">
                <div className="divImage">
                    <img className="infoImg" src={pegarItemInfo?.posterImage?.large} />
                </div>

                <div className="divInfos">

                    <div className="divInfoTitleFavority">
                        <p className="infosTitle">{pegarItemInfo?.titles.en || pegarItemInfo?.titles.en_us || pegarItemInfo?.titles.en_jp}</p>
                        <button className="buttonHeart" onClick={() => {
                            setFavoritos([...favoritos, pegarItemInfo])
                            console.log(favoritos);

                        }}><img className="heartInfo" src={HeartRed} /></button>
                    </div>

                    <div className="divInfoPositionRate">
                        <p className="infoPosition">Posicão:<span className="infoPositionSpan">{pegarItemInfo?.popularityRank}</span></p>
                        <p className="infoRate">
                            <img className="starInfo" src={Star} />
                            Avaliação: <span className="RateValue">{pegarItemInfo?.averageRating}</span>
                        </p>
                    </div>

                    <div className="infoCapitulosEps">
                        <p className="capEps">Capítulos/Episódios: <span className="capEpsSpan">{pegarItemInfo?.episodeCount || pegarItemInfo?.chapterCount}</span></p>
                    </div>

                    <div className="infoSinopse">
                        <p className="titleSinopse">Sinopse</p>
                        <p className="sinopse">{pegarItemInfo?.synopsis}</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ItemInfo;