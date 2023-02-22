import uuid from 'react-uuid'
import ProgrammingLanguage from '../localdata/skill/ProgrammingLanguage.json'
import Frameworks from '../localdata/skill/Frameworks.json'
import Database from '../localdata/skill/Database.json'
import Tools from '../localdata/skill/Tools.json'
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
            {Frameworks &&
              Frameworks.map((framework) => {
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
            {Database &&
              Database.map((db) => {
                return (
                  <div key={uuid()} className='text-center'>
                    <Icon src={db.image} alt={db.name} />
                    <p className='text-lg font-medium'>{db.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
        <div className='max-md:mb-10 mx-auto'>
          <h2 className='text-[2rem] font-medium text-center'>
            Tools & Platforms
          </h2>
          <div className='flex justify-center gap-10 mt-5 flex-wrap'>
            {Tools &&
              Tools.map((tool) => {
                return (
                  <div key={uuid()} className='text-center'>
                    <Icon src={tool.image} alt={tool.name} />
                    <p className='text-lg font-medium'>{tool.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
