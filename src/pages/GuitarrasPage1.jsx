import React from 'react'
import Banner from '../components/Banner/Banner'
import Nav from '../components/Nav/Nav'
import FooterEntero from '../components/Footer/FooterEntero/FooterEntero'
import Principal1 from '../components/CuerpoGuitarras/Principal1'

const GuitarrasPage = () => {
    return (
        <div>
            <Banner titulo="JORGE AREYU">
            </Banner>
            <Nav></Nav>
            <Principal1></Principal1>
            <FooterEntero></FooterEntero>
        </div>
    )
}

export default GuitarrasPage