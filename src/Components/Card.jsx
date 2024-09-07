import React from 'react'
import { useSelector } from 'react-redux'

function Card() {
   useSelector((state)=> state.product)
  return (
    <div>Card</div>
  )
}

export default Card