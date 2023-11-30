import React from 'react'
import Avatar from '@mui/material/Avatar';
import BirdBird from '../data/images/Avatar.jpg'

export const About = () => {
    return (
        <>
            <Avatar alt="BirdBird" src={BirdBird} sx={{ width: 100, height: 100 }} />
        </>
    )
}
