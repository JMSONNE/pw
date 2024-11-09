import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../../src/styles.css'
import profilePic from '../../public/assets/profile_pic.png'
import { Box, CardContent, CardActions, Card, Button, Typography, Grid, CardMedia } from '@mui/material';
import ContactForm from './ContactForm';

const Home = () => {
    // Links to external projects
    const javascriptsLink = 'https://javascripts-coffee.vercel.app';
    const javascriptsRepoLink = `https://github.com/JMSONNE/capstone-client`;
    const inAndOutLink = `https://in-out-gules.vercel.app`;
    const inAndOutRepoLink = `https://github.com/JMSONNE/In-Out`;

    // Function to handle buttons to external projects
    const handleLinks = (link) => {
        window.open(`${link}`, '_blank');
    };



    return (
        <>

            {/* Landing section */}
            <section className="landing-section">



                {/* Main banner with quote */}
                <div>


                    <header className='header'>

                        <Avatar
                            className='profile-pic'
                            alt="Jordyn Sonne"
                            src={profilePic} />
                        <h1 className="quote">"Machines take me by surprise with great frequency." -Alan Turing</h1>
                    </header>
                </div>




                {/* About me banner */}
                <Box className='bannerBox'>
                    <Typography className='banner' variant='h2'>
                        About me
                    </Typography>
                </Box>

                {/* About me section */}

                <Box className='about-me-box'>
                    <Typography className='about-me-text'>
                        Hi, I'm Jordyn.
                        A web developer passionate about building intuitive,
                        dynamic web applications.
                        I love solving challenges,
                        constantly learning,
                        and exploring new tools to bring ideas to life.
                    </Typography>


                </Box>
                <div id='scroll-icon'>
                    <img src="/assets/scrolldown.gif" alt="Scroll down" />
                </div>



            </section>


            {/* Rest of the site */}
            <section>
                {/* Banner to announce projects below */}
                <Box className='bannerBox'>
                    <Typography className='banner' variant='h2'>
                        Projects
                    </Typography>
                </Box>

                {/* Section for external projects to be displayed using cards from MUI */}
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', mb: '12vh' }}>

                    {/* Card for JavaScripts Cofee arranged using the Grid component from MUI*/}

                    <Grid item xs={12} md={6} lg={6} xl={4} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <Card className='card'>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    JavaScripts Coffee Co.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '3rem' }}>
                                    My capstone project from my coding bootcamp at Full Stack Academy! The client side is built with
                                    React and uses components from Material UI. The backend is built using Express.js and a PostgreSQL
                                    database.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" onClick={() => handleLinks(javascriptsLink)}>Visit Site</Button>
                                <Button size="small" onClick={() => handleLinks(javascriptsRepoLink)}>Visit Repository</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* Card for In & Out Cuts page*/}

                    <Grid item xs={12} md={6} lg={6} xl={4} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <Card className='card'>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    In & Out Cuts
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '3rem' }}>
                                    This is a landing page for a local hair salon in the city I live in.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" onClick={() => handleLinks(inAndOutLink)}>Visit Site</Button>
                                <Button size="small" onClick={() => handleLinks(inAndOutRepoLink)}>Visit Repository</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                {/* Banner to announce skills/technologies */}
                <Box className='bannerBox'>
                    <Typography className='banner' variant='h2'>
                        Technologies
                    </Typography>
                </Box>

                {/* Banner for front end technologies */}
                <Box className='skillBox'>
                    <Typography className='skillText' variant='h5'>
                        Front-End
                    </Typography>
                </Box>

                {/* Section outlining my development skills and technologies I'm proficient in */}
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
                    {/* Javascript */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    JavaScript
                                </Typography>
                                <CardMedia
                                    sx={{ width: '15%', transform: 'translateX(280%)' }}
                                    component='img'
                                    image='/assets/javascriptlogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* HTML */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    HTML 5
                                </Typography>
                                <CardMedia
                                    sx={{ width: '15%', transform: 'translateX(280%)' }}
                                    component='img'
                                    image='/assets/htmllogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* CSS */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    CSS 3
                                </Typography>
                                <CardMedia
                                    sx={{ width: '9%', transform: 'translateX(500%)' }}
                                    component='img'
                                    image='/assets/csslogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Sass */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    SASS
                                </Typography>
                                <CardMedia
                                    sx={{ width: '15%', transform: 'translateX(280%)' }}
                                    component='img'
                                    image='/assets/sasslogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* React */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    React
                                </Typography>
                                <CardMedia
                                    sx={{ width: '15%', transform: 'translateX(280%)' }}
                                    component='img'
                                    image='/assets/reactlogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Redux */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Redux
                                </Typography>
                                <CardMedia
                                    sx={{ width: '25%', transform: 'translateX(150%)' }}
                                    component='img'
                                    image='/assets/Redux.png'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Banner for back end technologies */}
                <Box className='skillBox'>
                    <Typography className='skillText' variant='h5'>
                        Back-End
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
                    {/* Node.js */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Node.js
                                </Typography>
                                <CardMedia
                                    sx={{ width: '15%', transform: 'translateX(280%)' }}
                                    component='img'
                                    image='/assets/Nodelogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Express.js */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Express.js
                                </Typography>
                                <CardMedia
                                    sx={{ width: '30%', transform: 'translateX(120%)' }}
                                    component='img'
                                    image='/assets/Expressjs.png'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* PostgreSQL */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PostgreSQL
                                </Typography>
                                <CardMedia
                                    sx={{ width: '15%', transform: 'translateX(280%)' }}
                                    component='img'
                                    image='/assets/postgresqllogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Prisma */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Prisma
                                </Typography>
                                <CardMedia
                                    sx={{ width: '30%', transform: 'translateX(120%)' }}
                                    component='img'
                                    image='/assets/prisma-2.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Banner for misc. technologies */}
                <Box className='skillBox'>
                    <Typography className='skillText' variant='h5'>
                        Miscellaneous
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
                    {/* CI/CD */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    CI/CD
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Git */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 332, minWidth: 300, maxHeight: 125 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Git
                                </Typography>
                                <CardMedia
                                    sx={{ width: '30%', transform: 'translateX(120%)' }}
                                    component='img'
                                    image='/assets/gitlogo.svg'
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

                {/* Banner for links to gitub and linked in
                <Box className='bannerBox'>
                    <Typography className='banner' variant='h2'>
                        Links
                    </Typography>
                </Box> */}

                {/* Banner to announce contact section */}
                <Box className='bannerBox'>
                    <Typography className='banner' variant='h2'>
                        Want to get in touch?
                    </Typography>
                </Box>

                {/* Contact section */}
                <Box sx={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <ContactForm />
                </Box>

            </section >
        </>
    );
}

export default Home;