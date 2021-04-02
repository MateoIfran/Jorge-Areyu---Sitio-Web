import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import g1 from './../../../images/g1.jpg'
import g4 from './../../../images/g4.jpg'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

export const UltGuitarras = () => {
    return (
        <Grid container item
            lg="12"
            md="12"
            sm="12"
            xl="12"
            xs="12"
            className = "UltimasGuitarras"
            alignContent="flex-start">
            <Grid container item
                lg="12"
                md="12"
                sm="12"
                xl="12"
                xs="12"
                className="tituloUltGui"
                justify="center"
                alignItems="center">
                <div className="titleUlt">
                    <Typography variant="h5">&nbsp;&nbsp;ULTIMAS GUITARRAS&nbsp;&nbsp;</Typography>
                </div>        
            </Grid>
            <Grid container item
                lg="12"
                md="12"
                sm="12"
                xl="12"
                xs="12"
                className="itemsDosLineas">
                <Grid container item
                    lg="12"
                    md="12"
                    sm="12"
                    xl="12"
                    xs="12"
                    className="itemsLinea"
                    justify="center">
                    <Grid container item
                        className="item"
                        justify="center"
                        lg="6"
                        md="6"
                        sm="6"
                        xl="6"
                        xs="12">
                        <div className="pItem">
                            <Typography variant="h6"><strong>LES PAUL</strong></Typography>
                            <Typography variant="subtitle1"><p>Cuerpo de cancharana.</p></Typography>
                        </div>
                        <div className="imgItem">
                            <img src={g1} alt=""/>    
                        </div>
                    </Grid>
                    <Grid container item
                        className="item"
                        justify="center"
                        lg="6"
                        md="6"
                        sm="6"
                        xl="6"
                        xs="12">
                        <div className="pItem">
                            <Typography variant="h6"><strong>TELECASTER</strong></Typography>
                            <Typography variant="subtitle1"><p>Cuerpo de guayubira.</p></Typography>
                        </div>
                        <div className="imgItem">
                            <img src={g4} alt=""/> 
                        </div>  
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item
                lg="auto"
                md="auto"
                sm="auto"
                xl="auto"
                xs="auto"
                className="vermas"
                justify="center">
                <div>
                    <Link color="inherit"
                        aria-label="menu"
                        component={RouterLink}
                        to="/guitarras/1">
                            <p><strong>Ver más</strong></p>
                    </Link>
                </div>      
            </Grid>
        </Grid>
    )
}

export default UltGuitarras