import React from 'react'
import { Link } from "react-router-dom";

import {squareOne} from '../assets/images'

import CTA from '../components/CTA';


const Internship = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                About my <span className='blue-gradient_text drop-shadow font-semibold'> Internship </span>
            </h1>

            <p className='text-slate-500 mt-5 leading-relaxed'>
                As the final stretch of my last year, I completed a 13-week application development internship at <span><Link to={'https://www.ntx.be/en/'} className='font-semibold blue-gradient_text'>Netropolix</Link></span>. 
                Here, I'll share a brief overview of my experiences and learnings.<br/>
                For a comprehensive documentation, visit <span><Link to={'https://marnikmaes-internship2024.netlify.app/'} className='font-semibold blue-gradient_text'>my internship documentation website</Link></span>.
            </p>

            <div className='py-10'>
                <div className='pb-5 text-2xl font-poppins font-semibold'>
                    <h2>What is Netropolix and why did I choose them?</h2>
                </div>
                <img src={squareOne} alt="Square One building" className='w-fit h-fit rounded-2xl drop-shadow-md'/>
                <p className='pt-2 italic text-slate-500 leading-relaxed text-sm'>Square One building, 2440 Geel</p>
                <p className='pt-3 text-slate-500 leading-relaxed'>
                    Netropolix is an in-house IT company in Geel's Square One building, founded in 1999. Starting with a small accounting package, 
                    it's now a growing company with 70 employees offering personalized IT solutions and proactive support. They view IT like a light bulb: 
                    it works in the background when switched on.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    I chose Netropolix for several reasons. After positive research on the work environment, I connected well with the staff during intake talks. 
                    Many Thomas More students interned here, with most having positive experiences, as confirmed by my internship coach. 
                    Plus, it's only a 5-minute bike ride from my home!
                </p>
            </div>

            <div className='pb-10'>
                <div className='pb-5 text-2xl font-poppins font-semibold'>
                    <h2>Dobby.Online</h2>
                </div>
                <p className='text-slate-500 leading-relaxed'>
                    During my internship at Netropolix, I'll work on a project for Zeron, 
                    a real estate software company known for Syndesk and Rentdesk. Acquired by the Garantis group in 2022, 
                    Zeron aims to enhance client solutions.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    Dobby.Online will bring together Zeron's features from platforms like Syndesk and Rentdesk into one easy-to-use platform. 
                    Instead of juggling multiple platforms, Dobby.Online will make everything smoother. 
                    It will utilize advanced technologies to make both the front and back ends better, making previously challenging tasks achievable.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    For my internship, I'll be hands-on in creating this platform from scratch. 
                    This includes everything from designing to actual development, giving me valuable experience in building a new platform.
                </p>
            </div>

            <div className='pb-10'>
                <div className='pb-5 text-2xl font-poppins font-semibold'>
                    <h2>Technology Stack</h2>
                </div>
                <p className='text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Front-end Development - React</span><br/>
                    The front-end will be developed using React, a popular JavaScript library known for building user interfaces efficiently. 
                    This choice was right up my alley since my previous positive experiences with React, 
                    finding it intuitive and seamless for web development.              
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Back-end Development - .NET</span><br/>
                    Transitioning to the backend, it was decided to use C# (.NET) with a microservices architecture, following domain-driven design principles. 
                    Microservices break down applications into loosely connected services. I'm was excited to learn more about back-end development to further expand my skill set.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Database - PostgreSQL</span><br/>
                    When it comes to the database, it was originally decided to use Couchbase, a NoSQL database known for its flexibility and scalability, 
                    particularly suited for handling large volumes of data. However, later on, the decision changed to PostgreSQL, 
                    a robust SQL database renowned for its reliability and performance. While not inherently part of my scope, 
                    it's always good to learn about new things and try to understand them.
                </p>
            </div>


            {/* <div className='flex flex-wrap my-20 lg:gap-24 gap-16'></div> */}

            <hr className='border-slate-200' />

            <CTA />
        </section>
    );
};

export default Internship