import React from 'react'
import perfil from './../../../images/perfil.jpg'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import UltGuitarras from '../UltGuitarras/UltGuitarras'

export const CuerpoMain = () => {
    return (
        <Grid container item
            className="bodyy"
            lg="12"
            md="12"
            sm="12"
            xl="12"
            xs="12">
            <Grid container item
                className="perfil"
                lg="12"
                md="12"
                sm="12"
                xl="12"
                xs="12">
                <Grid container item
                    className = "imgperfil"
                    alignItems="center"
                    lg="6"
                    md="12"
                    sm="12"
                    xl="6"
                    xs="12">
                    <img src={perfil} alt="perfil"/>       
                </Grid>
                <Grid container item
                    className = "textperfil"
                    lg="6"
                    md="12"
                    sm="12"
                    xl="6"
                    xs="12"
                    alignItems="center">
                        <p>
                        <h6 className = "h6perfil">
                            <Typography variant="h5">La guitarra de tus sueños...</Typography>
                        </h6>
                        
                            <Typography variant="subtitle1">Mi nombre es Jorge Areyú, 30 años. Amo la música desde que tengo uso de razón y ser <strong>luthier</strong> es un sueño que estoy cumpliendo. Todos merecen una guitarra creada con apego y pasión, esa es mi meta. No dudes en confiarme la responsabilidad de tener tu propia guitarra a gusto, personalizada, con materiales de calidad y buen sonido.</Typography>
                        </p>
                </Grid>  
            </Grid>
            <UltGuitarras></UltGuitarras>
        </Grid>
    )
}

export default CuerpoMain