import React from 'react';
import './ItemInfo.css'

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

                        }}><img className="heartInfo" src="https://lh3.googleusercontent.com/k23NkGAhoMAwNnYKsh749Izp9c6t6xSzsPoqzILt5w86BNsXAfzvHbLvSzSLZIVm0G4r2j6nSnx1L6nGKo5RiGxXaiYQ5lM1zpVztgT4cCbnsQXpWQHTisDFHG4j0j84VIwRkVNSyirlJYFvzRVuocTg5kMuFRN4rZx9j7eScrydaV2pr4h-n8J6LT6NQQmDvW3sdN0AqF6pBLkymzYWzFSkspOPJTQ6SedLoO4kpnp4Bt61alCEiGFchuvrCxfnju-j9NqdhxQYfjlcYbJ-X6WVORt1IGHIhpMCEOveTVjalxiiyajW7-j_r07hJZLHHJ6zP1h5blMDtKCT413gWEEZiw4gkIoeytfZfcbQvlOx5eEZKuJYXI4u7aTfX1XKyojooM8hIu8lknzxt3bhWLUq9AsG1BL0QZLBjWHKXsHzKBRMdPxwMXYa7SOtGmUSLvAySUPBWM61J7fCk5ZFp_5b2NttiXpnlLLNwG4Y2tuDBX_Ar1L5nzT0LNUJjLVIKCrMrR6jjRHAuqIosfqRTr3CYw-2qeZ8nFTv_UT_8aHomwmVY7nu2yJOpkfsBpVygK_e9r6Tffm6pykpf82zLK2Q7fCclmaQYWLQ0Le80cpWoYeezAn756xlBIY54vWAQ_mW103z1b3KxpH0YtLE3N2-gcdePY0RhI-BCjyP7-N-llOsmNvvE_nCGPl2M5YBuKgNyKNjhyn_PPLZc6kc=w551-h512-no?authuser=0" /></button>
                    </div>

                    <div className="divInfoPositionRate">
                        <p className="infoPosition">Posicão:<span className="infoPositionSpan">{pegarItemInfo?.popularityRank}</span></p>
                        <p className="infoRate">
                            <img className="starInfo" src="https://lh3.googleusercontent.com/TSYy5hP7OwsSa4iTGhFDB8My5D57ZP_IOZ1oD-oYgway4uH-MV7lYJjuuElRYEhnPnzOhwO5jRxewrpmnygkqIUya3GO--0C0WPKPDfpF4Q7993OXxVNGdmeoJAlpdekQLLwRV5SpfYDY9qYIpB9TlShk_PHLFL10IzXhuZNufQcDPjOW-ExNJlRwNvL8kkn7lKe1i5ctSZL4kDLlWZzTh6HRTUJ2XvwLIvrf4oAFQ-eeT_ZiIchLbxy23_1DKop8eB1OH64sWdY_4mzalJm2PJ94vmXhQ9O1ciAykx8fnvDZripQvyqQhjrNZJ3-ZK-_GH7Pg4yRafHaEJGyIPOU8YRe66ESty3Eh-_DFtqSO3ZZZqwWKGH6o1EHeIXIos641kdBY1RQBKbXNXuHmGiVxzsfVJxuqCFQTdBy3ZnGE5hAcFDjSZxku0e8e5haWiSlwX-0Z1rgr3iMMLxdR8MjGtq_TKgrDlaEvG1RTJDdcbTeDjTYf2GVpOm4HTMZg5jyQ0XGEMPXTGefgBDn9pFOdYaijmKAGgSaCfYen6GA2XAipemT9CLk0KD-FYgyla70ZR9wUB-MFFomzJ-ua0l97WhwDdS7KdyydrZYDrT4aMbr8JMko7-oGpYfRf9q8KykpHMHc4Pi58FBb7knucwN05lJAejRdL6S4j2pj32QMRiKaqQdnfntb3X6Dvt9F-y2lL72MKF7o_83cGYcf-n=w542-h512-no?authuser=0" />
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