import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imageText"
import { FaQuoteLeft } from "react-icons/fa"

const IndexPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
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
          src="../assets/boxOpen.jpg"
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
          alt="child meditating"
          className="hero-image"
        />
      </div>
      <ImageText
        image={<StaticImage src="../assets/ElPaintsSq.jpg"></StaticImage>}
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
      <div className="testimonial-container">
        <h2>Testimonials</h2>
        <Slider {...settings}>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
        </Slider>
      </div>
    </Layout>
  )
}

export default IndexPage
