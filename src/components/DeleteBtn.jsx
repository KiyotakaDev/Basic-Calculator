import React, {useContext} from 'react'
import { Context } from '../context/Context'

export function DeleteBtn({type, style}) {
    const { deleteLast } = useContext(Context)
  return (
    <button className={style} onClick={deleteLast}>{type}</button>
  )
}