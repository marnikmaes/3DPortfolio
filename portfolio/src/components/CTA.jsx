import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const CTA = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('marnikmaes46@hotmail.com')
      .then(() => {
        alert("You've copied my email. Don't hesitate to send me a message!");
      })
      .catch((error) => {
        console.error('Failed to copy email address: ', error);
      });
  };

  const downloadResume = () => {
    const pdfUrl = "Resume_Marnik_Maes.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume-marnikmaes.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className='cta'>
        <p className='cta-text'>Have more questions for me?<br className='sm:block hidden'/> 
          Feel free to copy my email address here!</p>
        <button className='btn w-[200px]' onClick={copyEmailToClipboard}>Click Here!</button>
      </section>

      <section className='cta'>
        <p className='cta-text'>Interested in my skills and experience?<br className='sm:block hidden'/> 
          Download my resume here!</p>
        <button className='btn w-full' onClick={downloadResume}>Click Here!</button>
      </section>

      <section className='flex justify-center space-x-6 flex-wrap md:flex-no-wrap mt-20'>
        <Link to={'https://www.linkedin.com/in/marnik-maes-b0aa79250/'} target="_blank" rel="noopener noreferrer">
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 transition duration-300 mb-4 hover:text-white">
            <Icon className='w-[32px] h-[32px]' icon="flowbite:linkedin-solid" />
          </div>
        </Link>
        <Link to={'https://x.com/MaesMarnik'} target="_blank" rel="noopener noreferrer">
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 transition duration-300 mb-4 hover:text-white">
            <Icon className='w-[32px] h-[32px]' icon="hugeicons:new-twitter" />
          </div>
        </Link>
        <Link to={'https://github.com/marnikmaes'} target="_blank" rel="noopener noreferrer">
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 transition duration-300 mb-4 hover:text-white">
            <Icon className='w-[32px] h-[32px]' icon="mingcute:github-fill" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default CTA;
