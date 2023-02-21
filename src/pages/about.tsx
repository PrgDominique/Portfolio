import DomzPhoto from '../assets/photo1.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <div className=' dark:text-[#ede2e2] '>
      <div className='container mx-auto'>
        <div className='md:mt-[7rem] mt-[5rem]'>
          <div className='grid md:grid-cols-2 gap-16'>
            <div className='row order-2 md:order-1'>
              <div className='flex p-5'>
                <h1 className='text-lg text-justify font-medium '>
                  Hello, I'm Dominique Simbillo, a software engineer with a
                  focus on web development. I received my Bachelor's degree in
                  Information Technology from Colegio De San Gabriel Archangel{' '}
                </h1>
              </div>
              <div className='flex mt-10 p-5'>
                <h1 className='text-lg text-justify font-medium '>
                  I have experience with front-end technologies such as HTML,
                  CSS, and JavaScript, as well as with ReactJS, one of the most
                  popular front-end JavaScript frameworks. I've also worked with
                  NextJS, a popular React framework for server-side rendering
                  and building static websites. I have a little knowledge of
                  TypeScript, a superset of JavaScript that provides static
                  typing, making the development of large applications easier
                  and more reliable.{' '}
                </h1>
              </div>
              <div className='flex mt-10 p-5'>
                <h1 className='text-lg text-justify font-medium'>
                  On the back-end, I've worked with PHP and have experience with
                  Laravel, one of the most popular PHP frameworks. I enjoy
                  building RESTful APIs and integrating front-end applications
                  with back-end services.{' '}
                </h1>
              </div>
            </div>
            <div className=' max-md:mt-10 flex md:order-2 order-1 max-md:w-[300px] mx-auto'>
              <Image
                src={DomzPhoto}
                alt='Dominque photo'
                className=' justify-center md:h-[450px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
