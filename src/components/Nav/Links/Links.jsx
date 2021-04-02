import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'


export const Links = () => {
    return (
        <Grid container
            justify="center"
            alignItems="center"
            spacing={1}>
            <Grid item> 
                <Link color="inherit"
                    aria-label="menu"
                    component={RouterLink}
                    to="/">
                    <p className="botonesLinks">
                        <Typography variant="button"><strong>Inicio</strong></Typography>
                    </p>
                </Link>                           
            </Grid>
            <Grid item>
                <Link color="inherit"
                    aria-label="menu"
                    component={RouterLink}
                    to="/guitarras/1">
                    <p className="botonesLinks">
                        <Typography variant="button"><strong>Guitarras</strong></Typography>
                    </p>
                </Link>
            </Grid>
            <Grid item>
                <Link color="inherit"
                    aria-label="menu"
                    component={RouterLink}
                    to="/contacto">
                    <p className="botonesLinks">
                        <Typography variant="button"><strong>Contacto</strong></Typography>
                    </p>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Links