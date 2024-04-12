import React from 'react';

const CTA = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('marnikmaes46@hotmail.com')
      .then(() => {
        alert('You have copied my email. Please contact me!');
      })
      .catch((error) => {
        console.error('Failed to copy email address: ', error);
      });
  };

  return (
    <section className='cta'>
      <p className='cta-text'>Have any more questions for me? <br className='sm:block hidden'/> 
        Don't hesitate to reach out!</p>
      <button className='btn' onClick={copyEmailToClipboard}>Copy my email</button>
    </section>
  );
};

export default CTA;
