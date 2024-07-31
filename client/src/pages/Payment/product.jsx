import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function product({product}) {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate('/payment', {state:{amount: product.price}})
    }
  return (
    <div>
    <h1>{product.name}</h1>
    <p>Price: {product.price} NGN</p>
    <button onClick={handleBuyNow}>Buy Now</button>
</div>
  )
}
