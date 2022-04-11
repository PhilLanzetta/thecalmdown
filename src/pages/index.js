import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imageText"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hero-container">
      <div className="hero-overlay">
        <h1>Find the Calm Amidst the Storm</h1>
        <p className="home-tagline">
          Lead your child toward their inner zen with our one-of-a-kind
          behavioral guide
        </p>
        <Link to="/shop/" className="btn-primary">
          SHOP NOW
        </Link>
      </div>
      <StaticImage
        src="../assets/river-rocks.jpg"
        formats={["auto", "webp", "avif"]}
        alt="child meditating"
        className="hero-image"
      />
    </div>
    <ImageText
      image={<StaticImage src="../assets/kid-meditating.jpg"></StaticImage>}
      headline={"Image with Text"}
      bodyText={
        "Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
      }
    ></ImageText>
    <ImageText
      image={<StaticImage src="../assets/kid-meditating.jpg"></StaticImage>}
      headline={"Image with Text"}
      bodyText={
        "Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
      }
      imageRight
    ></ImageText>
    <ImageText
      image={<StaticImage src="../assets/kid-meditating.jpg"></StaticImage>}
      headline={"Image with Text"}
      bodyText={
        "Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review."
      }
    ></ImageText>
  </Layout>
)

export default IndexPage
