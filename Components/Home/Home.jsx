import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../../src/styles.css'
import profilePic from '../../assets/profile_pic.png'
import logo from '../../assets/JSCC.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Home = () => {

    // Function to handle buttons to external projects
    const handleJavaScriptsLink = () => {
        window.open('https://javascripts-coffee.vercel.app', '_blank');
    };

    return (
        <>
            <div>

                {/* Main banner with quote */}

                <header className='header'>

                    <Avatar
                        className='profile-pic'
                        alt="Jordyn Sonne"
                        src={profilePic}
                        sx={{ width: 225, height: 225, margin: 5, zIndex: 1 }} />
                    <h1 className="quote">"Machines take me by surprise with great frequency." -Alan Turing</h1>
                </header>
            </div>


            {/* Section for main content */}
            <main className="body">

                {/* Section for external projects to be displayed using cards from MUI */}
                <Grid container spacing={3} sx={{ m: 3, display: 'flex', justifyContent: 'center', textAlign: 'center', p: 3 }}>

                    {/* Card for JavaScripts Cofee arranged using the Grid component from MUI*/}

                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                        <Card className='card' sx={{ maxWidth: 400, minWidth: 300, maxHeight: 370 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={logo}
                                title="JavaScripts Coffee"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    JavaScripts Coffee Co.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    My capstone project from my coding bootcamp at Full Stack Academy! The client side is built with
                                    React and uses components from Material UI. The backend is built using Express.js and a PostgreSQL
                                    database.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleJavaScriptsLink}>Visit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </main >
        </>
    );
}

export default Home;