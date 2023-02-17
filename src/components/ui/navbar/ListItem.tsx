import Link from 'next/link'

export const ListItem = ({ href, name, active }: any) => {
  return (
    <div>
      <Link
        href={href}
        className={
          active
            ? 'hover:text-slate-700 text-slate-700 font-bold mr-8'
            : 'hover:text-slate-700 mr-8'
        }
      >
        {name}
      </Link>
    </div>
  )
}
