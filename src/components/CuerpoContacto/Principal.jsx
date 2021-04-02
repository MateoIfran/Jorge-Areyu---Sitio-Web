import emailjs from "emailjs-com";
import React from 'react';
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_eri2jno', 'template_xctatq1', e.target, "user_Svwqcn5hVpORJXJxsslaE")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <Grid container item
            className="formulario"
                lg="12"
                md="12"
                sm="12"
                xl="12"
                xs="12"
                justify="center">
            <Grid container item
                class="formandtitle"
                justify="center">
                <Grid container item
                    className="tituloForm">
                    <Typography variant="h5"><p>Para contactarme en forma rápida, <strong>llenar el formulario.</strong></p></Typography>
                </Grid>
                <Grid container item
                    className="form"
                    justify="center">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Nombre" name="name"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email" name="email"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Asunto" name="subject"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Mensaje..." name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Enviar"></input>
                            </div>
                        </div>
                    </form>
                </Grid>                
            </Grid>

        </Grid>
    )
}