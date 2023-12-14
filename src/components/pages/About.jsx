import React from 'react'
import Avatar from '@mui/material/Avatar';
import BirdBird from '../data/images/Avatar.jpg'
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export const About = () => {
    return (
        <>
            <section className='about'>
                <div className='personal-card'>
                    <Avatar alt="BirdBird" src={BirdBird} sx={{ width: 200, height: 200 }} />
                    <h2>BirdBird</h2>
                    <p>Frontend Developer</p>
                    <div className='social-icon'>
                        <a href="mailto:birdbirdmurmur@gmail.com"><Email /></a>
                        <a href="https://www.linkedin.com/in/birdbirdmurmur/"><LinkedIn /></a>
                        <a href="https://github.com/birdbirdmurmur"><GitHub /></a>
                    </div>
                </div>
            </section>
        </>
    )
}
