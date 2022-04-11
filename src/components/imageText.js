import React from "react"

const ImageText = ({ image, headline, bodyText, imageRight }) => {
  return (
    <div className={`image-text-container ${imageRight ? "image-right" : ""}`}>
      <div className="image-text-img">{image}</div>
      <div className="image-text-txt">
        <h2>{headline}</h2>
        <p>{bodyText}</p>
      </div>
    </div>
  )
}

export default ImageText
