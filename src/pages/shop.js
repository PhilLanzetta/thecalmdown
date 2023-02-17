import * as React from "react"
import { useState } from "react"
import CheckoutNow from "../components/checkoutNow"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductSlides from "../components/productSlides"
import AddToCart from "../components/addToCart"

const Shop = () => {
  const [productChart, setProductChart] = useState("desc")
  const product = {
    id: 1,
    title: "The Calm Down Box",
    price: 15.98,
  }

  return (
    <Layout>
      <Seo title="Shop" />
      <div className="product-page">
        <ProductSlides />
        <div className="product-information">
          <h1>{product.title}&trade;</h1>
          <h2>${product.price}</h2>
          <AddToCart product={product}></AddToCart>
          <CheckoutNow title="BUY NOW" quantity={1}></CheckoutNow>
          <div className="information-chart">
            <div className="chart-nav">
              <button
                className={`info-chart-btn ${
                  productChart === "desc" ? "active" : ""
                }`}
                onClick={() => setProductChart("desc")}
              >
                Description
              </button>
              <button
                className={`info-chart-btn ${
                  productChart === "details" ? "active" : ""
                }`}
                onClick={() => setProductChart("details")}
              >
                Details
              </button>
              <button
                className={`info-chart-btn ${
                  productChart === "ship" ? "active" : ""
                }`}
                onClick={() => setProductChart("ship")}
              >
                Shipping
              </button>
            </div>
            <div className="chart-content" key={productChart}>
              {productChart === "desc" && (
                <div>
                  <p>
                    <strong>Product Includes:</strong>
                  </p>
                  <ul>
                    <li>Wooden Trinket Box</li>
                    <li>Scratch & Sniff Stickers</li>
                    <li>Assorted Foam/Puffy Stickers</li>
                    <li>3-pack of Paint Pots</li>
                    <li>Mini Playdough</li>
                    <li>DIY Mini-Pinwheel</li>
                    <li>Skills Passport</li>
                    <li>Pre-Populated and DIY Self-Regulation Cards</li>
                  </ul>
                </div>
              )}
              {productChart === "details" && (
                <div classname="product-details">
                  <div className="product-detail-row">
                    <p>Product Age Range</p>
                    <p>16months to 5 years old</p>
                  </div>
                  <div className="product-detail-row">
                    <p>Package Dimensions</p>
                    <p>6.06 x 6.02 x 4.75 inches</p>
                  </div>
                  <div className="product-detail-row">
                    <p>Package Weight</p>
                    <p>2lbs</p>
                  </div>
                </div>
              )}
              {productChart === "ship" && (
                <p>
                  Free shipping within the continental US.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Shop
