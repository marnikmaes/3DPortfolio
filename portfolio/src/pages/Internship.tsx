import React from 'react'
import { Link } from "react-router-dom";

import {squareOne, smartflowPageOne, smartflowPageTwo} from '../assets/images'

import CTA from '../components/CTA';


const Internship = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                About my <span className='blue-gradient_text drop-shadow font-semibold'> Internship </span>
            </h1>

            <p className='text-slate-500 mt-5 leading-relaxed'>
                As the final stretch of my last year, I completed a 13-week application development internship at <span><Link to={'https://www.ntx.be/en/'} className='font-semibold blue-gradient_text' target="_blank" rel="noopener noreferrer">NTX</Link></span>. 
                <br/>
                <br/>
                Here, I'll share a brief overview of my experiences and learnings, but for comprehensive documentation, I kindly request you to visit  <span><Link to={'https://marnikmaes-internship2024.netlify.app/'} className='font-semibold blue-gradient_text' target="_blank" rel="noopener noreferrer">my internship documentation website</Link></span>.
            </p>

            <div className='py-5'>
                <div className='pb-5 text-2xl font-poppins font-semibold'>
                    <h2>NTX</h2>
                </div>
                <img src={squareOne} alt="Square One building" className='w-fit h-fit rounded-2xl drop-shadow-md'/>
                <p className='pt-1 italic text-slate-500 leading-relaxed text-sm'>Square One building, 2440 Geel</p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>What is NTX?</span><br/>
                    NTX, formerly known as Netropolix, is an in-house IT company located in Geel's Square One building, founded in 1999. Starting with a small accounting package, 
                    it's now a growing company with around 170 employees offering personalized IT solutions and proactive support. They view IT like a light bulb: 
                    it works in the background when switched on.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Why have I chosen them as my internship location?</span><br/>
                    I chose Netropolix for several reasons. After positive research on the work environment, I connected well with the staff during intake talks. 
                    Many Thomas More students interned here, with most having positive experiences, as confirmed by my internship coach. 
                    Plus, it's only a 5-minute bike ride from my home!
                </p>
            </div>

            <div className='pb-5'>
                <div className='pb-4 text-2xl font-poppins font-semibold'>
                    <h2>Dobby.Online</h2>
                </div>
                <p className='text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Who or What is Zeron?</span><br/>
                    During my internship at Netropolix, I'll work on a project for Zeron, 
                    a real estate software company known for Syndesk and Rentdesk. Acquired by the Garantis group in 2022, 
                    Zeron aims to enhance client solutions.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Dobby.Online?</span><br/>
                    Dobby.Online will bring together Zeron's features from platforms like Syndesk and Rentdesk into one easy-to-use platform. 
                    Instead of juggling multiple platforms, Dobby.Online will make everything smoother. 
                    It will utilize advanced technologies to make both the front and back ends better, making previously challenging tasks achievable.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Scope on the syndic?</span><br/>
                    A syndic is essentially a property manager tasked with overseeing the common areas and facilities of condominiums 
                    or apartment buildings. Their responsibilities typically involve managing maintenance and repairs, handling finances 
                    and budgets, enforcing community rules, and advocating for the interests of property owners or homeowners associations.

                    During my internship, I'll focus on creating functionalities for syndics. 
                    Given the platform's future growth, this focus on one user group is necessary to ensure quality results.

                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>What will I be doing during my internship?</span><br/>
                    For my internship, I'll be hands-on in creating this platform from scratch. 
                    This includes everything from designing to actual development, giving me valuable experience in building a new platform.
                </p>
            </div>

            <div className='pb-5'>
                <div className='pb-4 text-2xl font-poppins font-semibold'>
                    <h2>Smartflows</h2>
                </div>
                <p className='text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>What is a smartflow?</span><br/>
                    The main thing I'll be focusing on during my internship is the smartflow section of the platfrom. 
                    This section is a totally new addition that's not yet present in any of the other platforms. Smartflows are basically a 
                    collection of steps with underlying tasks that have to be completed in a certain order before being able to move on.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Functionalities of a smartflow?</span><br/>
                    First, the Smart Flows overview allows syndics to easily see all Smart Flows for each building, 
                    tracking task progress and completion. Second, syndics should manage Smart Flows with CRUD operations (Create, Read, Update, Delete), handling both the 
                    flows and their individual steps and tasks.
                </p>

            </div>

            <div className='pb-10'>
                <div className='pb-4 text-2xl font-poppins font-semibold'>
                    <h2>Technology Stack</h2>
                </div>
                <p className='text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Front-end Development - React + Vite</span><br/>
                    The front-end will be developed using React, a popular JavaScript library known for building user interfaces efficiently. 
                    This choice aligns perfectly with my previous positive experiences with React, finding it intuitive and seamless for 
                    web development. Additionally, we'll leverage Vite as the build tool, known for its fast development server and 
                    lightning-fast hot module replacement (HMR), enhancing the development experience even further.             
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

            <div className='pb-10'>
                <div className='pb-4 text-2xl font-poppins font-semibold'>
                    <h2>Required documents</h2>
                </div>
                <p className='text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Project Plan</span><br/>
                    This section of my internship documentation offers a comprehensive overview of the project's objectives, timeline, and tasks. Developing this plan was crucial for enhancing my understanding of the project, and it served as a valuable guide throughout my work. 
                    Further details about this project plan and other agreements can be found in the <span><Link to={'https://marnikmaes-internship2024.netlify.app/intro/5w1h.html#how-was-the-internship-managed'} className='font-semibold blue-gradient_text' target="_blank" rel="noopener noreferrer">How was the internship managed?</Link></span> and <span><Link to={'https://marnikmaes-internship2024.netlify.app/PoA/'} className='font-semibold blue-gradient_text' target="_blank" rel="noopener noreferrer">Plan of Action</Link></span> sections of my internship documentation.
                </p>
                <p className='pt-4 text-slate-500 leading-relaxed'>
                    <span className='font-semibold'>Reflection</span><br/>          
                </p>
            </div>
            
            <hr className='border-slate-200' />

            <CTA />
        </section>
    );
};

export default Internship