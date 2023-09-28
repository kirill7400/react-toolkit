import {useAppDispatch, useAppSelector} from "../store/hooks";
import {ChangeEvent} from "react";
import {addImg, changeValue} from "../slices/avatarSlice";

export default function AvatarView(){
  const list = useAppSelector(state => state.avatarList.list)
  const dispatch = useAppDispatch()

  const load = () => {
    dispatch(addImg())
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload =  () => {
      dispatch(changeValue(reader.result))
    }
  }

  return(
    <div className='avatarView'>
      <div>
        <input onChange={ handleFileChange } type="file"/>
        <button onClick={ load }>Загрузить</button>
      </div>
      <div className='imgContainer'>
        { list.map((item: string, i: number) => <img key={ i } className='avatar' src={ item } alt="img"/>) }
      </div>
    </div>
  )
}