import React from 'react'
import NombreTitulo from "./NombreTitulo/NombreTitulo"
import Grid from '@material-ui/core/Grid'

const banner = ({titulo}) => {
    return (
        <header className="header">
            <Grid container item
                justify="center"
                alignItems="center"
                lg="auto"
                md="auto"
                sm="auto"
                xl="auto"
                xs="auto">
                <Grid container item
                    alignItems="center"
                    justify="center">
                    <div className="titlebanner">
                        <NombreTitulo titulo={titulo}></NombreTitulo> 
                    </div>        
                </Grid>
            </Grid>
        </header> 
    )
}

export default banner
