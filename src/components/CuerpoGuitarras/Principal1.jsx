import { Grid } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import AppCarrusel1 from './carrusel1'
import AppCarrusel2 from './carrusel2'

export const Principal = () => {


    return (
        <Grid container item
            className="divGuitarras"
            lg="12"
            md="12"
            sm="12"
            xl="12"
            xs="12">
            <Grid container item
                className = "imgGuitar"
                alignItems="center"
                lg="6"
                md="6"
                sm="6"
                xl="6"
                xs="12"
                >
                    <AppCarrusel1></AppCarrusel1>   
            </Grid>
            <Grid container item
                className = "textGuitar"
                lg="6"
                md="6"
                sm="6"
                xl="6"
                xs="12"
                alignItems="center">
                    <div>
                    <h4 className = "desGuitar">
                        LES PAUL
                    </h4>
                    <br></br>
                    <Typography variant="subtitle1">
                    Cuerpo y mango de cancharana con
                    diapasón de rosewood.
                    Inlays de nácar dorados +
                    Tapa de laurel flameado +
                    Micrófonos wilkison +
                    Clavijas gotho +
                    Puente wilkison +
                    Electrónica dimarzio +
                    Pintura de nitro celulosa +
                    Radio del 12 y
                    Escala 24,75</Typography>
                    <br></br>
                    <strong>03/10/2020</strong>
                    </div>
            </Grid> 
            <Grid container item
                alignItems="center"
                justify="center"
                className="lineaSep">
                <h1>_____________________________________________________________________________________________</h1>
            </Grid>
            <Grid container item
                className = "imgGuitar"
                alignItems="center"
                lg="6"
                md="6"
                sm="6"
                xl="6"
                xs="12"
                >
                    <AppCarrusel2></AppCarrusel2>   
            </Grid>
            <Grid container item
                className = "textGuitar"
                lg="6"
                md="6"
                sm="6"
                xl="6"
                xs="12"
                alignItems="center">
                    <div>
                    <h4 className = "desGuitar">
                        FENDER TELECASTER
                    </h4>
                    <br></br>
                    <Typography variant="subtitle1">
                    Mango y diapasón de maple + 
                    Cuerpo de guayubira(hueco) +
                    Tapa de paraiso +
                    Micrófonos wilkison +
                    Electrónica dimarzio +
                    Pintura nitro celulosa +
                    Radio 9,5 y
                    Escala 25,5</Typography>
                    <br></br>
                    <strong>14/05/2020</strong>
                    </div>
            </Grid> 
            <Grid container item
                alignItems="center"
                justify="center"
                className="lineaSep">
                <h1>_____________________________________________________________________________________________</h1>
            </Grid>
            <Grid container item
                className="botones"
                lg="12"
                md="12"
                sm="12"
                xl="12"
                xs="12"
                justify="center"
                alignItems="center">
                <div>
                    <Link color="inherit"
                        aria-label="menu"
                        component={RouterLink}
                        to="/guitarras/1">
                            <Button variant="contained">1</Button>   
                        </Link>
                </div>
                <div>
                    <Link color="inherit"
                        aria-label="menu"
                        component={RouterLink}
                        to="/guitarras/2">
                            <Button variant="contained">2</Button>   
                        </Link>
                </div>
            </Grid>
        </Grid>
    )
}

export default Principal