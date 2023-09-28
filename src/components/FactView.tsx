import {useAppDispatch, useAppSelector} from "../store/hooks";
import {changeValue} from "../slices/factSlice";

export default function FactView() {
  const value = useAppSelector(state => state.factList.value)
  const dispatch = useAppDispatch()
  const showList = useAppSelector(state => state.factList.showList)

  return(
    <div className='factView'>
      <input className='factView-input' value={ value } onChange={ (e) => dispatch(changeValue(e.target.value)) } type="number" min="0" max="5"/>
      <ul>
        { showList.map((item:string, i:number) => <li key={ i }>{ item }</li>) }
      </ul>
    </div>
  )
}