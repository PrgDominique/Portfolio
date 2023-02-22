import uuid from 'react-uuid'
import Firebase from '@/components/skills/Firebase'
import Git from '@/components/skills/Git'
import Github from '@/components/skills/Github'
import MongoDB from '@/components/skills/MongoDB'
import MySQL from '@/components/skills/MySQL'
import ProgrammingLanguage from '../localdata/skill/ProgrammingLanguage.json'
import Frameworks from '../localdata/skill/Frameworks.json'
import { Icon } from '@/components/Image/Icon'

const Skill = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-[8rem]'>
        <h1 className='text-center md:text-[4rem] text-[3rem] font-bold'>
          Skills
        </h1>
      </div>
      <div className=' max-md:flex-col max-md:items-center mt-[2rem] gap-20'>
        <div className='mx-auto'>
          <h2 className='text-[2rem] font-medium text-center'>
            Programming Language
          </h2>
          <div className='flex justify-center gap-10 mt-5 flex-wrap'>
            {ProgrammingLanguage.map((pl) => {
              return (
                <div key={uuid()} className='text-center'>
                  <Icon src={pl.image} alt={pl.name} />
                  <p className='text-lg font-medium'>{pl.name}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-[2rem] font-medium text-center'>
            Frameworks & Technologies
          </h2>
          <div className='flex justify-center gap-10 mt-5 flex-wrap'>
            {Frameworks.map((framework) => {
              return (
                <div key={uuid()} className='text-center'>
                  <Icon src={framework.image} alt={framework.name} />
                  <p className='text-lg font-medium'>{framework.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='flex  max-md:flex-col max-md:items-center mt-[5rem] gap-20'>
        <div>
          <h2 className='text-[2rem] font-medium text-center'>Database</h2>
          <div className='flex justify-center gap-10 mt-5 flex-wrap'>
            <div className='text-center'>
              <MySQL />
              <p className='text-lg font-medium'>MySQL</p>
            </div>
            <div className='text-center'>
              <MongoDB />
              <p className='text-lg font-medium'>MongoDB</p>
            </div>
            <div className='text-center'>
              <Firebase />
              <p className='text-lg font-medium'>Firebase</p>
            </div>
          </div>
        </div>
        <div className='max-md:mb-10 mx-auto'>
          <h2 className='text-[2rem] font-medium text-center'>
            Tools & Platforms
          </h2>
          <div className='flex justify-center gap-10 mt-5 flex-wrap'>
            <div className='text-center'>
              <Git />
              <p className='text-lg font-medium'>Git</p>
            </div>
            <div className='text-center'>
              <Github />
              <p className='text-lg font-medium'>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
