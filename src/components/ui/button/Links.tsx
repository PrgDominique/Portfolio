export const Links = ({ src, name }: any) => {
  return (
    <div>
      <a href={src} target='_blank'>
        <button className='p-2 border-2 border-solid border-black rounded-lg dark:border-white hover:bg-[#121212] hover:text-white dark:hover:bg-[#ede2e2] dark:hover:text-black'>
          {name}
        </button>
      </a>
    </div>
  )
}
