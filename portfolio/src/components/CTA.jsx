import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have any more questions for me? <br className='sm:block hidden'/> 
        Don't hesitate to reach out!</p>
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA