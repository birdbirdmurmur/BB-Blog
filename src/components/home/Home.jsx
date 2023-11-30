import React from 'react'
import { useState, useEffect } from 'react'

export const Home = () => {
    const [render, setRender] = useState(true)

    /* ------每5s從AB之間切換------ */
    useEffect(() => {
        const interval = setInterval(() => {
            setRender(prevState => !prevState);
        }, 5000);

        return () => clearTimeout(interval);
    }, [])
    /* ------先渲染A，5s之後渲染B------ */
    /*useEffect(() => {
        const timer = setTimeout(() => {
            setRender(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [])*/

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
