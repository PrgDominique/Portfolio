export const Livelink = ({ src, name }: any) => {
  return (
    <div>
      <a href={src} target='_blank'>
        <button className='p-2 border-2 border-solid text-white rounded-lg bg-[#121212] dark:bg-[#ede2e2] dark:text-black'>
          {name}
        </button>
      </a>
    </div>
  )
}