import React from 'react'
import Grid from '@material-ui/core/Grid'
import Links from './Links/Links'
import Redes from './Redes/Redes'

const Nav = () => {
    return (
        <div className="nav">
            <Grid container item
                lg="auto"
                md="auto"
                sm="auto"
                xl="auto"
                xs="auto"
                justify="center">
                <Grid container item
                    lg="auto"
                    md="auto"
                    sm="auto"
                    xl="auto"
                    xs="auto">
                    <Links></Links>
                </Grid>
                <Grid container item
                    lg="auto"
                    md="auto"
                    sm="auto"
                    xl="auto"
                    xs="auto">
                    <Redes></Redes>
                </Grid>
            </Grid>
        </div>

    )
}

export default Nav
