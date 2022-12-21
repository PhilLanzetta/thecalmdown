import React from "react"
import { useState, useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick/lib/slider"

const ProductSlides = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "product" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.edges

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  }

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: ".slider-for",
    swipeToSlide: true,
    focusOnSelect: true,
  }

  return (
    <div className="product-slider-wrapper">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={slider => setSlider1(slider)}
      >
        {images.map(image => (
          <div className="product-image" key={image.node.id}>
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
            ></GatsbyImage>
          </div>
        ))}
      </Slider>
      <div className="thumbnail-slider-wrapper">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={slider => setSlider2(slider)}
        >
          {images.map(image => (
            <div className="product-image" key={image.node.id}>
              <GatsbyImage
                image={image.node.childImageSharp.gatsbyImageData}
              ></GatsbyImage>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlides
