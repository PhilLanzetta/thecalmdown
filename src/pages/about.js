import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ImageText from "../components/imageText"

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <div className="about-page">
        <h1>About Us</h1>
        <ImageText
          image={<StaticImage src="../assets/alisa-pic.jpeg"></StaticImage>}
          headline={"Our Founder"}
          bodyText={
            "I'm baby drinking vinegar thundercats whatever helvetica, mixtape craft beer synth tbh celiac kombucha. Etsy kogi actually tbh DIY, skateboard truffaut raw denim direct trade jean shorts cronut health goth. Selvage direct trade beard forage butcher heirloom master cleanse biodiesel. Whatever hell of chicharrones, copper mug tumeric pop-up tote bag chia blog meh kitsch poke pug knausgaard beard."
          }
        ></ImageText>
        <ImageText
          image={<StaticImage src="../assets/calm-beach.jpg"></StaticImage>}
          headline={"Our Philosophy"}
          bodyText={
            "I'm baby drinking vinegar thundercats whatever helvetica, mixtape craft beer synth tbh celiac kombucha. Etsy kogi actually tbh DIY, skateboard truffaut raw denim direct trade jean shorts cronut health goth. Selvage direct trade beard forage butcher heirloom master cleanse biodiesel. Whatever hell of chicharrones, copper mug tumeric pop-up tote bag chia blog meh kitsch poke pug knausgaard beard."
          }
          imageRight
        ></ImageText>
      </div>
    </Layout>
  )
}

export default About
