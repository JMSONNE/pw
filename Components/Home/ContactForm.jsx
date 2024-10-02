import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent, Button } from '@mui/material';

function ContactForm() {
    const [state, handleSubmit] = useForm("xrbznnng");
    if (state.succeeded) {
        return <p>Thanks for getting in contact!</p>;
    }
    return (
        <Card>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <form onSubmit={handleSubmit} className='contactForm'>
                    <label htmlFor="email">
                        Email Address:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <Button variant='contained' type="submit" disabled={state.submitting}>
                        Submit
                    </Button>

                </form>
            </CardContent>
        </Card >
    );
}

export default ContactForm;