import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto'

const ContactosPre = ({icono, descrip}) => {
    return (
        <Grid container item
            alignItems="center"
            spacing={1}>
            <Grid item>
                {icono}
            </Grid>
            <Grid item>
                <Typography variant="subtitle1"><strong>{descrip}</strong></Typography>
            </Grid>
        </Grid>
    )
}

export default ContactosPre
