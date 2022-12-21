import React, { useContext } from "react"
import { CartContext } from "./cartContext"

const AddToCart = ({ product }) => {
 console.log(product)
  const cart = useContext(CartContext)
  return (
    <button
      className="checkout-btn outline"
      onClick={() => cart.onProductAdd(product)}
    >
      Add To Cart
    </button>
  )
}

export default AddToCart
