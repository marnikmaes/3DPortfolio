import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isloading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_,
      {
        from_name: form.name,
        to_name: 'Marnik',
        from_email: form.email,
        to_email: 'marnikmaes46@gmail.com',
        message: form.message

      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      // TODO: show success message
      // TODO: hide alert
      setForm({name: '', email: '', message: ''});
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      // TO: SHOW ERROR MESSAGE
    })
  };

  const handleFocus = () => {};
  const handleBlur = () => {};
  

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch!</h1>
        <form 
        className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSumbit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input 
            type="text" 
            name='name' 
            className='input' 
            placeholder='please enter your name' 
            required 
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
            type="email" 
            name='email' 
            className='input' 
            placeholder='please enter your email' 
            required 
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
            name='message'
            rows={4} 
            className='textarea' 
            placeholder='Please enter your message' 
            required 
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button
          type='submit'
          className='btn'
          disabled={isloading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isloading ? 'Sending ...' : 'Send Message'}

          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact