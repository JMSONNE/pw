import React from 'react'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'

export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs='auto'>
                        <Typography variant='p' className='footerText' component='a' href='https://www.linkedin.com/in/jordynsonne' target="_blank">
                            linkedin.com/in/jordynsonne
                        </Typography>
                    </Grid>
                    <Grid item xs='auto'>
                        <Typography variant='p' className='footerText'>
                            E-mail - jordynmsonne@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
        </>
    )
}
