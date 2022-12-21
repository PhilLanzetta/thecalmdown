import React, { useState, createContext, useEffect } from "react"

export const CartContext = createContext()

export function CartProvider(props) {
  const [cart, setCart] = useState(function () {
    let savedCart = []
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || []
    } catch (error) {
      savedCart = []
    }
    return savedCart
  })

  console.log(cart)

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  function handleProductDelete(id) {
    const updatedCart = cart.filter(product => product.id !== id)
    setCart(updatedCart)
  }

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(product => product.id === newProduct.id)
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product
      })
      setCart(updatedCart)
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ])
    }
  }

  function getTotalPrice() {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  }

  function getProductFromCart(productId) {
    return cart.find(product => product.id === productId)
  }

  function getCartCount() {
    return cart.reduce((total, product) => total + product.quantity, 0)
  }

  function handleQuantityChange(id, number) {
    const updatedCart = cart.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: parseInt(number),
        }
      }
      return product
    })
    setCart(updatedCart)
  }

  const value = {
    cart,
    onProductAdd: handleProductAdd,
    onProductDelete: handleProductDelete,
    onQuantityChange: handleQuantityChange,
    getTotalPrice,
    getProductFromCart,
    getCartCount,
  }

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}
