import React from 'react'
import ContactForm from './ContactForm'
import Hero from '../Hero.jsx'
import { Box } from '@chakra-ui/react'

const ContactPage = () => {
  const imageUrl = '/contact.jpg'
  return (
    <>
    <Box bg='#040C18'>
    <Hero
  title='Contact Me'
    description="I'm always open to discussions, ideas, and opportunities. Whether it's about web or app development, market insights, or trading queries, feel free to reach out. I value every message and do my best to respond as promptly as possible.

    Your questions, feedback, or collaboration ideas are always welcome.
    
    Simply fill out the form below, or if you prefer, drop me an email at info@jsa.capital 
    
    "
    imageUrl={imageUrl}
    />
    <ContactForm />
</Box>
</>
  )
}
export default ContactPage