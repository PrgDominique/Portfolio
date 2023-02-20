import DomzPhoto from '../assets/photo1.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <div className=' dark:text-[#ede2e2] '>
      <div className='md:mt-[12rem] mt-[5rem]'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='row'>
            <div className='flex '>
              <h1 className='text-[1.30rem] font-medium md:ml-[10rem] mx-[2rem]'>
                Hello, I'm Dominique Simbillo, a software engineer with a focus
                on web development. I received my Bachelor's degree in
                Information Technology from Colegio De San Gabriel Archangel{' '}
              </h1>
            </div>
            <div className='flex mt-10'>
              <h1 className='text-[1.30rem] font-medium md:ml-[10rem] mx-[2rem]'>
                I have experience with front-end technologies such as HTML, CSS, and JavaScript, as well as with ReactJS, one of the most popular front-end JavaScript frameworks. I've also worked with NextJS, a popular React framework for server-side rendering and building static websites. I have a little knowledge of TypeScript, a superset of JavaScript that provides static typing, making the development of large applications easier and more reliable.{' '}
              </h1>
            </div>
            <div className='flex mt-10'>
              <h1 className='text-[1.30rem] font-medium md:ml-[10rem] mx-[2rem]'>
              On the back-end, I've worked with PHP and have experience with Laravel, one of the most popular PHP frameworks. I enjoy building RESTful APIs and integrating front-end applications with back-end services.{' '}
              </h1>
            </div>
          </div>
          <div className='md:ml-[10rem] max-md:mt-10 max-md:flex max-md:justify-center '>
            <Image src={DomzPhoto} alt='Dominque photo' width={400} className='flex justify-center '/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
