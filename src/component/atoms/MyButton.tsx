import React, { useState } from 'react'
import { ITag } from '../../models/ITag'
import { useDispatch } from 'react-redux'
import { TagDispatch } from '../../store'
import { aktifTiklama,pasifTiklama } from '../../store/feature/anketSlice'


interface ITagProps{
  tag: ITag
  counter: number
}

function MyButton(props:ITagProps) {
  const dispatch = useDispatch<TagDispatch>()
 const{name} = props.tag
 const[isChecked,setIsChecked]=useState(false)
 const tiklama =()=>{
    isChecked?dispatch(aktifTiklama(props.tag)):dispatch(pasifTiklama(props.tag))
    setIsChecked(!isChecked)
 }
  return (
    <input type="button" value={name} 
    onClick={tiklama}  disabled={props.counter==7 && !isChecked}
    className={isChecked?'btn btn-primary col-2 m-2':'btn btn-secondary col-2 m-2'} />
  )
}

export default MyButton