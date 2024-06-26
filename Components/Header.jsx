import React from 'react';
import Avatar from '@mui/material/Avatar';
import profilePic from '../assets/profile_pic.png';
import '../src/styles.css'

const Header = () => {
    return (
        <>
            <div>

                <header className='header'>

                    <Avatar
                        className='profile-pic'
                        alt="Jordyn Sonne"
                        src={profilePic}
                        sx={{ width: 225, height: 225, margin: 5, zIndex: 1 }} />
                    <h1 className="quote">"Machines take me by surprise with great frequency." -Alan Turing</h1>
                </header>
            </div>
        </>
    );
}

export default Header;
