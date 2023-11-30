import React from 'react'
import { useState, useEffect } from 'react'

export const Home = () => {
    const [render, setRender] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            // setRender(false);
            setRender(prevState => !prevState);
        }, 5000);

        return () => clearTimeout(interval);
    }, [])

    return (
        <>
            <section className="home">
                {render ? (
                    <div className='homeContainer'>
                        <h3>Hi, I am BirdBird</h3>
                        <p>I am a Frontend Developer.</p>
                    </div>
                ) : (
                    <div className='homeContainer'>
                        <h3>Hi, I am MurMur</h3>
                        <p>It's My First Blog by Vite&Vercel.</p>
                    </div>
                )}
            </section>
        </>
    )
}
