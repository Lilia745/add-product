import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Product() {
  const product = useSelector((state)=> state.product)
  // console.log(product);
  const dispatch = useDispatch()

  const addToCard = (products)=>{
    dispatch({
      type:"ADD_TO_CARD",
      payload:products
    })
  }
        
  return (
    <div>
      <div>Product</div>
      {
        product.map((product,i)=>{
          return(
            <div key={`product${i}`} className='item-cont'>
              <h4>{product.name}</h4>
              <h4>{product.price}</h4>
              <button onClick={()=>addToCard(product)}>Add to card</button>
            </div>
          )
        })
      }
    </div>
  )
}