import { Link } from "react-router-dom";

import CTA from '../components/CTA';
import { projects } from "../constants";
import { github, arrow } from "../assets/icons";

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                About my <span className='blue-gradient_text drop-shadow font-semibold'> Projects </span>
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed'>
            During my two years studying Digital Innovation, I've worked on a bunch of amazing projects for different people. 
            From crafting websites to diving into game development to creating interactive AR experiences, it's been a wild ride!
            Check out some of my favorite projects below.
            </p>
            <div className='flex flex-wrap my-20 lg:gap-24 gap-16'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                        <div className='mt-5 flex flex-col'>
                            <p className="text-sm font-light ">{project.tag}</p>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500 min-h-28'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600'
                                >
                                    Live Link
                                </Link>
                                <img
                                    src={arrow}
                                    alt='arrow'
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                            <div className='flex items-center gap-2 font-poppins'>
                                {project.githubRepo ? (
                                    <>
                                        <Link
                                            to={project.githubRepo}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='font-semibold'
                                        >
                                            Github Repository
                                        </Link>
                                        <img
                                            src={github}
                                            alt='github'
                                            className='w-4 h-4 object-contain'
                                        />
                                    </>
                                ) : (
                                    <span className='font-semibold '>No github repo available</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    );
};

export default Projects;
