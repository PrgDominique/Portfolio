export const Icon = ({ src, alt }: any) => {
  return (
    <picture>
      <img src={src} alt={alt} width={75} className='hover:animate-ping' />
    </picture>
  )
}
