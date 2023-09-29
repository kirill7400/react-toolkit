import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {FilmDetail} from "../interfaces/FileDetail";

export default function FilmDetailCard() {
  let { id } = useParams();
  const [item, setItem] = useState<FilmDetail>()
  const [loading, setLoading] = useState('init')
  const navigate = useNavigate()

  useEffect(() => {
    setLoading('start')
    axios.get('https://www.omdbapi.com', {
      params: {
        apikey: '64405bd2',
        i: id
      }
    })
      .then(res => {
        console.log(res.data)
        setLoading('load')
        setItem(res.data)
      })
      .catch(e => setLoading('error'))
  }, []);

  return (

    <>
      {
        loading === 'start' ?
          <div>Загрузка...</div>:
          loading === 'load' ?
            <div className='filmDetailCard'>
              <div>
                <img className='filmDetailCard-img' src={item.Poster} alt="img"/>
              </div>
              <div className='filmCard-info'>
                <div><b>Название:</b> { item.Title }</div>
                <div><b>Жанр:</b> { item.Type }</div>
                <div><b>Год выпуска:</b> { item.Year }</div>
                <div><b>Жанр:</b> { item.Genre }</div>
                <div><b>Продолжительность:</b> { item.Runtime }</div>
                <div><b>Режиссер:</b> { item.Director }</div>
                <div><b>Актеры:</b> { item.Actors }</div>
                <div><b>Рейтинг фильма:</b> { item.imdbRating }</div>
                <button onClick={ () => navigate('/') }>На главную</button>
              </div>
            </div> :
            <div>Нет данных!</div>
      }
    </>
  )
}