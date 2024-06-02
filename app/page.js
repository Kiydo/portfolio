import React from 'react';
import Intro from './sections/intro';
import NavBar from './_components/navBar';
import '../styles/globals.css';
import Footer from './_components/footer';

export default function Home() {
    return (
        <div className='min-h-screen bg-day-one'>
            <div>
                <NavBar />
            </div>
            <Intro />
            <div className='mt-64'>
                <Footer />
            </div>
        </div>
    );
}