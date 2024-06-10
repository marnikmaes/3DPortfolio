import React from 'react';

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
    </>
  );
};

export default CTA;
