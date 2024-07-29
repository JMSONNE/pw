import React from 'react';
import Avatar from '@mui/material/Avatar';
import '../../src/styles.css'
import profilePic from '../../assets/profile_pic.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
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

            {/* Section for external projects to be displayed */}

            <main className="body">

                {/* Card for JavaScripts Cofee */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="JavaScripts Coffee"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            JavaScripts Coffee Co.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Visit</Button>
                    </CardActions>
                </Card>

            </main>
        </>
    );
}

export default Home;