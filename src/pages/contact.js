import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from '../components/contactForm'

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default Contact