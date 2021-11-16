import React from 'react';

import './Item.css';

const Item = ({apiData, setStyleItemInfo, setPegarItemInfo}) => {
    return (
        <div className="itens" onClick={() => { 
            setStyleItemInfo({display: 'flex'}) 
            setPegarItemInfo(apiData?.attributes);
            }}>
             <img className="img" src={apiData?.attributes.posterImage.small}/>
             <p className="title">{apiData?.attributes.titles.en || apiData?.attributes.titles.en_us || apiData?.attributes.titles.en_jp}</p>
        </div>
    )
};

export default Item;