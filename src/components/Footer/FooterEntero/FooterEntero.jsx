import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export const FooterEntero = () => {
    return (
        <Grid container item
            className = "footer"
            justify="center"
            alignItems="center"
            lg="12"
            md="12"
            sm="12"
            xl="12"
            xs="12">
            <div className="contentFooter">
                <Typography variant="h5">Jorge Areyu - 2020 - Luján, Buenos Aires</Typography>
            </div>
        </Grid>
    )
}

export default FooterEntero