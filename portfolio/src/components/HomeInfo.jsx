import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Marnik Maes</span>👋<br/>
            Student, Digital Innovation at Thomas More Geel.
        </h1>
    ),
    2: (
        <InfoBox 
            text="I am an enthusiastic IT student with a passion for continuous learning and growth. Wanna learn more about me?"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
        text="During my two years studying Digital Innovation, I've worked on a bunch of amazing projects for different people. Curious to see them all?"
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="As the final stretch of my last year, I completed a 13-week application development internship at Netropolix. Sounds interesting, right?"
            link='/internship'
            target='_blank'
            rel='noopener noreferrer'
            btnText="Internship at Netropolix"
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo