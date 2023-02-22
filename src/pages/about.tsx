import Contents from '../localdata/about/Contents.json'
import uuid from 'react-uuid'

const About = () => {
  return (
    <div className='container mx-auto '>
      <div className='md:mt-[8rem] mt-[5rem]'>
        <div className='grid md:grid-cols-2 gap-16'>
          <div className='row order-2 md:order-1'>
            {Contents &&
              Contents.map((content) => {
                return (
                  <div key={uuid()} className='flex p-5 mt-5'>
                    <h1 className='text-lg text-justify font-medium '>
                      {content.text}
                    </h1>
                  </div>
                )
              })}
          </div>
          <div className=' max-md:5-10 max-md:w-[300px] mt-10 flex md:order-2 order-1  mx-auto'>
            <img
              src='https://i.ibb.co/3vpCrVK/photo1-removebg-preview.png'
              alt='Dominque photo'
              className=' justify-center md:h-[450px] border rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
