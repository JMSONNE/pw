import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../../src/styles.css'
import profilePic from '../../assets/profile_pic.png'
import { Box, CardContent, CardActions, Card, Button, Typography, Grid } from '@mui/material';
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
            <div>

                {/* Main banner with quote */}

                <header className='header'>

                    <Avatar
                        className='profile-pic'
                        alt="Jordyn Sonne"
                        src={profilePic} />
                    <h1 className="quote">"Machines take me by surprise with great frequency." -Alan Turing</h1>
                </header>
            </div>


            {/* Section for main content */}
            <main className="body">

                {/* About me banner */}
                <Box className='bannerBox'>
                    <Typography className='banner' variant='h2'>
                        About me
                    </Typography>
                </Box>

                {/* About me section */}
                <Box sx={{ marginBottom: '3.5rem', textAlign: 'center', padding: '2rem' }}>
                    <Typography variant='p'>
                        Hi, I'm Jordyn, a passionate web developer who loves crafting intuitive and dynamic web applications.
                        From creating user-friendly interfaces to ensuring seamless functionality,
                        I thrive on solving challenges and bringing ideas to life through code.
                        I'm always eager to learn and grow in my field, constantly exploring new tools,
                        technologies, and frameworks to stay ahead in this fast-evolving industry.
                        Whether it's refining my skills or diving into something entirely new,
                        my curiosity and dedication to learning fuel my development journey.
                    </Typography>
                </Box>

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
                                    In & Out Cuts (Not Finished)
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '3rem' }}>
                                    This is a landing page for a local hair salon in the city I live in. Still being worked on but is available to visit.
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
                        Skills / Technologies
                    </Typography>
                </Box>

                {/* Section outlining my development skills and technologies I'm proficient in */}
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
                    {/* Javascript */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    JavaScript
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* HTML */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    HTML 5
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* CSS */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    CSS 3
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Node.js */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Node.js
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Express.js */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Express.js
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* PostgreSQL */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PostgreSQL
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* React */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    React
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Redux */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Redux
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* CI/CD */}
                    <Grid item xs='auto' >
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
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
                        <Card className='skillCard' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Git
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
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

            </main >
        </>
    );
}

export default Home;