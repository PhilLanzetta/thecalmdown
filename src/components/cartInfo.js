import { Link } from "gatsby"
import React, { useContext, useState } from "react"
import { CartContext } from "./cartContext"
import { StaticImage } from "gatsby-plugin-image"
import CheckoutNow from "./checkoutNow"

const CartInfo = () => {
  const cart = useContext(CartContext)
  const totalPrice = cart.getTotalPrice()
  const [quantity, setQuantity] = useState(cart.cart[0]?.quantity || 0)

  const handleQuantityChange = e => {
    cart.onQuantityChange(1, e.target.value)
  }

  return (
    <section className="cart-page">
      {cart.cart.length === 0 ? (
        <article className="empty-cart">
          <h1>Your cart</h1>
          <p>Your cart is currently empty.</p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping &rarr;
          </Link>
        </article>
      ) : (
        <article className="cart-info">
          <h1>Your cart</h1>
          <Link to="/shop">Continue shopping</Link>
          <section className="cart-details-container">
            <ul className="mobile-cart-headings">
              <li className="product-heading">Product</li>
              <li>Price</li>
            </ul>
            <ul className="desktop-cart-headings">
              <li className="product-heading">Product</li>
              <li className="price-heading">Price</li>
              <li className="quantity-heading">
                <label htmlFor="quantity">Quantity</label>
              </li>
            </ul>
            <article className="cart-details">
              <section className="product-container">
                <StaticImage
                  src="../assets/product/product.jpeg"
                  className="product-image"
                ></StaticImage>
                <div className="cart-product-title">
                  <h3>The Calm Down Box&trade;</h3>
                  <button
                    className="btn-underline"
                    onClick={() => cart.onProductDelete(1)}
                  >
                    Remove
                  </button>
                </div>
              </section>
              <section className="quantity-price">
                <p>$15.98</p>
                <div className="quantity-holder">
                  <label htmlFor="quantity" className="mobile-input-label">
                    Qty
                  </label>
                  <input
                    id="quantity"
                    className="quantity-box"
                    type="number"
                    min="1"
                    defaultValue={quantity}
                    onChange={e => handleQuantityChange(e)}
                  ></input>
                </div>
              </section>
            </article>
            <article className="total">
              <div className="subtotal-container">
                <div className="subtotal-text-box">
                  <h3>Subtotal*</h3>
                  <h3>{totalPrice.toFixed(2)} USD</h3>
                </div>
                <p>* applicable taxes added at checkout</p>
                <CheckoutNow
                  quantity={quantity}
                  title="CHECK OUT"
                ></CheckoutNow>
              </div>
            </article>
          </section>
        </article>
      )}
    </section>
  )
}

export default CartInfo
