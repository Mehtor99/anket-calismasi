import React from 'react'
import MyButton from '../atoms/MyButton'
import { useAppSelector } from '../../store'

function ButtonList() {
  const list = useAppSelector(state =>state.tag.tagList)
  const number = useAppSelector(state =>state.tag.counter)
  return (
    <div>
      {
        list?.map((tag, index)=>{
          return <MyButton key={index} tag={tag} counter={number}/>
        })
      }
    </div>
  )
}

export default ButtonList