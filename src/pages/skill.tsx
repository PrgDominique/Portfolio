import Firebase from '@/components/skills/Firebase'
import Git from '@/components/skills/Git'
import Github from '@/components/skills/Github'
import Javascript from '@/components/skills/Javascript'
import Laravel from '@/components/skills/Laravel'
import MaterialUI from '@/components/skills/MaterialUI'
import MongoDB from '@/components/skills/MongoDB'
import MySQL from '@/components/skills/MySQL'
import NextJS from '@/components/skills/NextJS'
import NodeJs from '@/components/skills/NodeJs'
import Php from '@/components/skills/Php'
import ReactJS from '@/components/skills/ReactJS'
import TailwindCSS from '@/components/skills/TailwindCSS'
import Typescript from '@/components/skills/Typescript'
import React from 'react'

const Skill = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-[8rem]'>
        <h1 className='text-center md:text-[4rem] text-[3rem] font-bold'>
          Skills
        </h1>
      </div>
      <div className='flex md:justify-between max-md:flex-col max-md:items-center mt-[5rem] gap-20'>
        <div>
          <h2 className='text-[2rem] font-medium text-center'>
            Programming Language
          </h2>
          <div className='flex justify-center gap-10 mt-5 flex-wrap'>
            <div className='text-center'>
              <Php />
              <p className='text-lg font-medium'>PHP</p>
            </div>
            <div className='text-center'>
              <Javascript />
              <p className='text-lg font-medium'>Javascript</p>
            </div>
            <div className='text-center'>
              <Typescript />
              <p className='text-lg font-medium'>Typescript</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-[2rem] font-medium text-center'>
            Frameworks & Technologies
          </h2>
          <div className='flex justify-center gap-10 mt-5 flex-wrap'>
            <div className='text-center'>
              <ReactJS />
              <p className='text-lg font-medium'>React JS</p>
            </div>
            <div className='text-center'>
              <NextJS />
              <p className='text-lg font-medium'>Next JS</p>
            </div>
            <div className='text-center'>
              <Laravel />
              <p className='text-lg font-medium'>Laravel</p>
            </div>
            <div className='text-center'>
              <NodeJs />
              <p className='text-lg font-medium'>Node JS</p>
            </div>
            <div className='text-center'>
              <TailwindCSS />
              <p className='text-lg font-medium mt-2'>Tailwind CSS</p>
            </div>
            <div className='text-center'>
              <MaterialUI />
              <p className='text-lg font-medium mt-2'>Material UI</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex md:justify-between max-md:flex-col max-md:items-center mt-[5rem] gap-20'>
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
        <div className='max-md:mb-10'>
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
