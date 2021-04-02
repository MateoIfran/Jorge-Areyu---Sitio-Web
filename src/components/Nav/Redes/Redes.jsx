import { Grid } from '@material-ui/core'
import React from 'react'
import 'fontsource-roboto'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import ContactosPre from './ContactosPre/ContactosPre'

export const Redes = () => {
    return (
        <Grid container item
            justify="center"
            alignItems="center"
            alignContent="center"
            spacing={4}>
            <Grid item
                >
                <div className = "ContactosPre">
                    <ContactosPre 
                            icono = {<EmailOutlinedIcon></EmailOutlinedIcon>}
                            descrip = "jorgeareyu7@gmail.com">              
                    </ContactosPre>                    
                </div>
            </Grid>                
            <Grid item
                >
                <div className = "ContactosPre">
                    <ContactosPre 
                            icono = {<PhoneAndroidOutlinedIcon></PhoneAndroidOutlinedIcon>}
                            descrip = "2323-212985">              
                    </ContactosPre>                    
                </div>

            </Grid>  
        </Grid>
    )
}

export default Redes