import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MGlBPDiqeZyih7QqgccPt8lWgrU17fsDZTYGGY0rEBDUoliE5xx7UHbOUa01zzOBt5ScCtd1SqnDuptO4TsSZZ000S8x2cWVL"
    )
  }
  return stripePromise
}

const CheckoutNow = ({ title, quantity }) => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: "price_1MGlSJDiqeZyih7QAMTrmBFo", quantity: quantity },
      ],
      successUrl: `https://the-calm-down-box.netlify.app/confirmation/`,
      cancelUrl: `https://the-calm-down-box.netlify.app/checkout`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      className={
        loading ? "checkout-btn filled disabled" : "checkout-btn filled"
      }
      onClick={redirectToCheckout}
    >
      {title}
    </button>
  )
}

export default CheckoutNow
