export const Resume = ({ href, name, active }: any) => {
  return (
    <div>
      <a
        target='_blank'
        href={href}
        rel='noopener noreferrer'
        className={
          active
            ? 'hover:text-slate-700 text-slate-700 font-bold mr-8'
            : 'hover:text-slate-700 mr-8'
        }
      >
        {name}
      </a>
    </div>
  )
}
