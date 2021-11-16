import React, { useEffect, useState } from 'react';

import './Main.css';

import Item from './Item';


const Main = ({apiData, categoriaView, setStyleItemInfo, setPegarItemInfo}) => {
    return (
        <div className="center">
            <p className="categoria">{categoriaView}</p>
            <div className="container">
                {apiData?.data?.map((item) => {
                    return <Item apiData={item} setStyleItemInfo={setStyleItemInfo} setPegarItemInfo={setPegarItemInfo}/>
                })}
            </div>
        </div>
    )
}

export default Main;