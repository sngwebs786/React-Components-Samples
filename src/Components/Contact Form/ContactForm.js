// install MATERIAL UI

import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './ContactForm.css';


const ContactForm = () => {
    return (
        <div className='contact-form-main'>
            
                <div className='contact-form-contact-div'>
                    <h1 className='contact-form-contact-heading'>Contact Us</h1>
                    <center>
                    <div>
                        <TextField id="standard-basic" label="Firstname" variant="standard" className="contact-form-input-fields"/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Lastname" variant="standard" className="contact-form-input-fields"/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Email" variant="standard"  className="contact-form-input-fields "/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Password" variant="standard"  className="contact-form-input-fields "/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Confirm Password" variant="standard"  className="contact-form-input-fields "/>
                    </div>
                    <div>
                        <TextField
                            id="standard-multiline-static"
                            label="Type your message here ..."
                            multiline
                            rows={4}
                            className="contact-form-input-fields "
                            variant="standard"
                        />
                    </div>
                    <Button variant="contained" className="contact-form-submit-btn">Submit</Button>
                    </center>
                </div>

        </div>
    )
}

export default ContactForm
