import React from 'react'
import ContactForm from './ContactForm'
import Hero from '../Hero.jsx'
import { Box } from '@chakra-ui/react'

const ContactPage = () => {
  return (
    <>
    <Box bg='#040C18'>
    <Hero
    title='Contact Me'
    description='description'
    />
    <ContactForm />
</Box>
</>
  )
}
export default ContactPage