import Link from 'next/link'

export const ListItem = ({href, name}: any) => {
  return (
    <div>
        <Link href={href}>{name}</Link>
    </div>
  )
}

