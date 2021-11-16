import React from 'react';

import './Header.css';

let callFora;
const Header = ({ setIV, inputValue, callApi, setCategoria, setCategoriaView, callFavorites }) => {
    callFora = callApi;
    return (
        <div className="header">
            <div className="left">
                <button className="btnLogo"><img className="imgLogo" src="https://lh3.googleusercontent.com/ADJBgwaNeL9kbH-gMaPOQw5T6vjZ8XvfUjF70im_L-CLPi2PYuzb91hzZDv4McnXC1ODn4_FwF-aEAtcKIYuyxuS9cq4xmaxrblRFjRvueFf06oHBd2WdqP6WO883a78I9eJ8s2KQ4HbzoDWpOwIA-gR1XPchYcBtJTH_0KbaJNF-rUjgKP34Ly8lWXEI0h1A93TbSu87fG2TJixxD8HG6AQzkUBXKa-FdILrHv8aKMTLcF6_jCsGbMaYEZrq40Vx8XycZxscabN6ZTg4YV5d7JVK6uWsN6PsOUU-CKwFatRGYsk6mNfsJ1FFrcYxqRNMC5vFNnJNpSzxEganVkq6AQ0fYi8JJ5DrkQq00FAHWxkL1xopaJmVq6-LyYmVAb5r74s5RJfnE1gRviieI_ovRbslpEvx_U8-l3BWR_HKfwPmkFb7m3plli3IL8nTtqbS00EsYftS3K4NSoteO21qtvJyKIAUwB8h-yf0jcqlcSzsfFsoJbWvDPLJKXqf_qG33Sb3pMh9aOxp1zVpw4_Zp9FKqJ0YGmMc4ySbikYRbFaarzdGV7rrTupgZzwH5xgfGL4-fgB33koA9jwgkaoscIHZ3gvb2qvZZonWfNsdr5Wz6-FSxuHJ-_xASrpaS-j3Nb2ppuvOdoe77rA6yy9OJha6Gu5psDC_A-iFryp9vxgolLDccfTrVNJbq-bsio703vUfs2n9kpGbSQmLDqb=w914-h223-no?authuser=0" /></button>
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
                <button className="btn" onClick={() => callApi()}><img className="search" src="https://lh3.googleusercontent.com/fahvvhlL6cqf48DTVDTifbfUDD4NuQJpLJ1c25Q3PdyKq56_Shbyly_BR_EpVi1Yofs7Pms_M32DzmsMMvVeFSH7TAA-TUmF8Jhyxz5PCDYhki-rxbkmjO3652EZRXX5hzmLRGg8LoN-OFJ6Pg3IJZ0KsFymQN95FnABvu7MFmvWotrL2QhgyoXxWslUDDJNz7ljG553UU1vL0S0G51NPdWXhGelVNx2F_PH3NQJku3ggbmXMhIsLstmRwGci4BQaPveBjwLYbe2Ou1_NJKD1m9ZWL-ZeUsS_7QrV1qsjcvskYsJo2BB1lxFp6Qj2lOpJduWGmL3uIvWE1P40aTqlK8kfqPtw9KBosFm06x8tvr-N7EWPhJ4hxarUGSQwzuXFQP52U5GnfAW0GyrdcJynEbArrcsOLp-ciSLvLVGveyNUGbyEn5TRQOLl3jBIj3qD6XSrWG1y3E07M6BiqBsrW608dTv5A4XSEFgKBxbSjTD94IyhRyISc6SzuUcILtfbqmyFxA1DF34wXdQW_oj0u2vZynsSyEdwooHi7ALSmcucBRWvWvCTrY6IneN4GJr9W3zxneeYG4CGOURlYdG12kdhGlXWhosRwwKjlY9NnFb3FVciIKfqBXSjf8YuT1C_3IXQeXlYL-KV1c5OzM6IJckx4fAi5pfZiu66x848GivpOhnrui7ItSHol3HfRYAYi39oWVJJhjdUSRC3rGn=s512-no?authuser=0" /></button>
                <button className="favoritos" onClick={() => { callFavorites() }}><img className="icons" src="https://lh3.googleusercontent.com/KrdPvcPVC-BKCUYrU9fsQgtOcl59q4JED4OcMMntyRKFAgCbewHAyqgq9tscTtz01gbg98hAsKCtbRnYZe8hpMRi8SR0IyoPfy56tM7CF-gOOiWyKukEGl1Rsj6fD728fPPnkMwKLIrwc9OlsLpIbUBqCpz95DUVg3kIdRRmJEM6ZdO1I7J_5srt317qCf5wGhHeT2zSN1z-5OPTCKwFFrkOJt0MjkNJtlRYZ_ntS2eMFIARmfwWXq3lb1FhZZKKPwnGLtYXhGdky1VpnKimfSVzFf-07Uf_PFXo86GC50EAKG_D1Zg3kBuYpGNqz1q_VmSQ7z1C0sKU1pttlIacqR1loLkhi-4MGs8XUIrAyJA-zPZsQx41joPdLoS2HmXdfSEh7XUKs8thzVDEBfgVviNKYcnN1UaukySipoNkOQO2ssdn7EyX0WQGPqBbT746tYd9zByMIkWU2RWkfoYghDplCiJyTxssSKt1dacMGRQk3r35721X4fYiPu7GvyMVhvLt4YwbmHCRKBKputQ_OHl1rLVE3XRpht5422o0vRNNy5vXF56RXgVWTVTqCO7fKlsE3gBgGuGBt_RsMJZH6bkPBt_mGJ2vvciSSijHoPx5kvnT14uq6nN3WLYdHPRoDw8RWtuMMXETDFi6CtPdXLSGrDnBnMsUra7UCxkzl6kappR12RGDgwDo8IqFB6LX5iANSZcJieB7XId9BJrE=w551-h512-no?authuser=0" /></button>
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