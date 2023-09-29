import './App.css';
import FindFilms from "./components/FindFilms";
import AvatarView from "./components/AvatarView";
import {Route, Router, Routes} from "react-router-dom";
import FilmFavorites from "./components/FilmFavorites";
import FilmDetailCard from "./components/FilmDetailCard";

function App() {
  return (
    <div className="App">
      {/*<FactView/>
      <AvatarView/>*/}
      <Routes>
        <Route path="/" element={ <FindFilms/> } />
        <Route path="/favorites" element={ <FilmFavorites/> } />
        <Route path="/film-card/:id" element={ <FilmDetailCard/> } />
        <Route path="*" element={ <div>Not Found</div> } />
      </Routes>
    </div>
  );
}

export default App;
