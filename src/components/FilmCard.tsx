import {Film} from "../interfaces/Film";
import {useAppDispatch} from "../store/hooks";
import {addFavorites} from "../slices/filmsSlice";
import {useNavigate} from "react-router-dom";

export default function FilmCard({ film }:{ film: Film }) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const add = () => {
    dispatch(addFavorites(film))
  }

  const openFilmCard = () => {
    navigate('/film-card/' + film.imdbID)
  }

  return (
    <div className='filmCard'>
      <div className='filmCard-poster' onClick={ openFilmCard }>
        <img className='filmCard-img' src={film.Poster} alt="img"/>
      </div>
      <div className='filmCard-info'>
        <div><b>Название:</b> { film.Title }</div>
        <div><b>Тип:</b> { film.Type }</div>
        <div><b>Год:</b> { film.Year }</div>
        <button onClick={ add }>Добавить в избранное</button>
      </div>
    </div>
  )
}