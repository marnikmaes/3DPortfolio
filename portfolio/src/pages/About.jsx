import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'

import {skills, experiences} from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Marnik</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am an enthusiastic IT student with a passion for continuous learning and growth. 
          I am deeply motivated to enhance my technology skills on every level. With a strong commitment 
          to staying up-to-date with the latest industry trends, I thrive on the challenges that come with 
          working in the ever-evolving IT landscape.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <div className='btn-back rounded-xl'/>
                <img className='w-1/2 h-1/2 object-contain' src={skill.imageUrl} alt={skill.name}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Studies</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Over the years, I've had the pleasure of embarking on some amazing study journeys. 
            Here's a rundown of my entire academic career:</p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img src={experience.icon} alt={experience.name} className='w-[60%] h-[60%] object-contain'/>

                </div>}
                iconStyle={{background:experience.iconBg}}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>{experience.company_name}</p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}

                  </ul>
                </VerticalTimelineElement>

              ))}
            </VerticalTimeline>
          </div>
      </div>

      <hr className='border-slate-200'></hr>

      <CTA/>
    </section>
  )
}

export default About