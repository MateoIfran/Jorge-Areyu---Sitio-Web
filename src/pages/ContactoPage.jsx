import React from 'react'
import Banner from './../components/Banner/Banner'
import Nav from '../components/Nav/Nav'
import FooterEntero from './../components/Footer/FooterEntero/FooterEntero'
import Principal from './../components/CuerpoContacto/Principal'

const ContactoPage = () => {
    return (
        <div>
            <Banner titulo="JORGE AREYU">
            </Banner>
            <Nav></Nav>
            <Principal></Principal>
            <FooterEntero></FooterEntero>
        </div>
    )
}

export default ContactoPage