import { Grid } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import AppCarrusel3 from './carrusel3'
import AppCarrusel4 from './carrusel4'

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
                    <AppCarrusel3></AppCarrusel3>   
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
                    <h3 className = "desGuitar">
                        DREADNOUGHT
                    </h3>
                    <br></br>
                    <Typography variant="subtitle1">
                    Cuerpo y mango de cedro.
                    Fondo y aros de Arce +
                    Forma algo más cuadrada que en las guitarras clásicas +
                    Cuerdas de acero flat top de formatos 0,00,000
                    </Typography>
                    <br></br>
                    <strong>07/12/2019</strong>
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
                    <AppCarrusel4></AppCarrusel4>   
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
                        SUPERSTRATO
                    </h4>
                    <br></br>
                    <Typography variant="subtitle1">
                    Cuerpo y mango de Tilo.
                    Tapa de Arce +
                    Pastillas de alta ganancia +
                    Mástil y diapason de 15,75 pulgadas de radio +
                    22 trastes</Typography>
                    <br></br>
                    <strong>26/07/2019</strong>
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