import React from 'react'
import Banner from './../components/Banner/Banner'
import Nav from '../components/Nav/Nav'
import Perfil from '../components/CuerpoMain/Perfil/Perfil'
import FooterEntero from './../components/Footer/FooterEntero/FooterEntero'

const MainPage = () => {
    return (
        <div>
            <Banner titulo="JORGE AREYU">
            </Banner>
            <Nav></Nav>
            <Perfil></Perfil>
            <FooterEntero></FooterEntero>
        </div>
    )
}

export default MainPage