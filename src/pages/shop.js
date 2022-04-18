import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductSlides from "../components/productSlides"

const Shop = () => {
  const [productChart, setProductChart] = useState("desc")

  return (
    <Layout>
      <Seo title="Shop" />
      <div className="product-page">
        <ProductSlides />
        <div className="product-information">
          <h1>The Calm Down Box&trade;</h1>
          <h2>$35.00</h2>
          <button className="checkout-btn outline">Add To Cart</button>
          <button className="checkout-btn filled">Buy It Now</button>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  nihil saepe pariatur a excepturi odio quo temporibus provident
                  nisi facere. Quas, voluptatibus tenetur. Maxime non fugit
                  expedita accusamus corrupti voluptates.
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
