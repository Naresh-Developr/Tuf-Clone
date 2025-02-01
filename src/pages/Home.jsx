import React from 'react'
import Navbar from '../components/Navbar'
import Tufpluscard from '../components/Tufpluscard'
import '../static/css/home.css'
import Grid from '../components/Grid'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='home'>
            <header>
                <Navbar />
            </header>
            <div className='outer-container'>
            <main className = 'main'>
                <h1 className='h2'>Gear Up for <span className='sucess'>Success</span>: Your Ultimate Preparation Hub!</h1>
                <p>Navigate Your Learning Adventure: Explore DSA, Master CS Concepts, Design Systems, Hone Competitive Skills, and Ace Interviews Effortlessly</p>
                <Tufpluscard/>
                <Grid/>            
            </main>
            </div>
        </div>
    )
}

