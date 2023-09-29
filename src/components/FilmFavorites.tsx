import {useAppSelector} from "../store/hooks";
import {Film} from "../interfaces/Film";
import FilmCard from "./FilmCard";
import {useNavigate} from "react-router-dom";

export default function FilmFavorites () {
  const navigate = useNavigate()
  const favorites = useAppSelector(state => state.findFilms.favorites)

  return (
    <div className='filmFavorites'>
      <div className='findFilms-search'>
        <button onClick={ () => navigate('/') }>На главную</button>
      </div>
      {
        favorites && favorites.length ?
          favorites.map((item:Film, i:number) => <FilmCard key={ i } film={ item }></FilmCard>) :
          <div>Нет фильмов!</div>
      }
    </div>
  )
}