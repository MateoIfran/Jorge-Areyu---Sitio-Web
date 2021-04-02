import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import 'fontsource-roboto'

const NombreTitulo = ({titulo}) => {
    return (
        <Grid container item
            justify="center"
            alignItems="center"
            lg="auto"
            md="auto"
            sm="auto"
            xl="auto"
            xs="auto"
            >
            <Grid item>
                <div className="tituloGeneral">
                    <Typography variant="h3">{titulo}</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default NombreTitulo
