import {useAppDispatch, useAppSelector} from "../store/hooks";
import {changeValue, fetchFilms} from "../slices/filmsSlice";
import FilmCard from "./FilmCard";
import {Film} from "../interfaces/Film";
import {useNavigate} from "react-router-dom";

export default function FindFilms() {
  const navigate = useNavigate()

  const value = useAppSelector(state => state.findFilms.value)
  const list = useAppSelector(state => state.findFilms.list)
  const error = useAppSelector(state => state.findFilms.error)
  const loading = useAppSelector(state => state.findFilms.loading)

  const dispatch = useAppDispatch()

  return(
    <div className='findFilms'>
      <div className='findFilms-search'>
        <input value={ value } onChange={ (e) => dispatch(changeValue(e.target.value)) } type="text"/>
        <button onClick={ () => dispatch(fetchFilms(value)) }>Загрузить</button>
        <button onClick={ () => navigate('/favorites') }>Избранное</button>
      </div>
      {
        loading ?
          <div>Загрузка...</div> :
          error ?
            <div>{ error }</div> :
            list.map((item:Film, i:number) => <FilmCard key={ i } film={ item }></FilmCard>)
      }
    </div>
  )
}