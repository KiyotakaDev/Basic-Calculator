import React, { useContext } from 'react'
import { Context } from '../context/Context'

export function Equal({style, type}) {
    const { calculate } = useContext(Context)
  return (
    <button className={style} onClick={calculate}>{type}</button>
  )
}