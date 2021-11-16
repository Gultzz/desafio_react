import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemInfo from "./components/ItemInfo";
import Item from "./components/Item";

const App = () => {
  const [inputValue, setIV] = React.useState("");
  const [apiData, setApiData] = React.useState();
  const [categoria, setCategoria] = React.useState("anime");
  const [categoriaView, setCategoriaView] = React.useState("Anime");
  const [styleItemInfo, setStyleItemInfo] = React.useState({ display: "none" });
  const [pegarItemInfo, setPegarItemInfo] = React.useState();
  const [favoritos, setFavoritos] = React.useState([]);

  async function callApi() {
    const URL = `https://kitsu.io/api/edge/${categoria}?filter[text]=${inputValue}&page[limit]=18`;
    const API = await fetch(URL).then((r) => r.json());
    setApiData(API);
  }
  function callFavorites() {
    setApiData(favoritos);
  }

  return (
    <>

      <Header
        setIV={setIV}
        inputValue={inputValue}
        callApi={callApi}
        setCategoria={setCategoria}
        setCategoriaView={setCategoriaView}
        callFavorites={callFavorites}
      />
      <Main
        apiData={apiData}
        categoriaView={categoriaView}
        setStyleItemInfo={setStyleItemInfo}
        setPegarItemInfo={setPegarItemInfo}
      />
      <ItemInfo
        favoritos={favoritos}
        setFavoritos={setFavoritos}
        style={styleItemInfo}
        setStyleItemInfo={setStyleItemInfo}
        pegarItemInfo={pegarItemInfo}
      />
      <Footer />
    </>
  );
};

export default App;
