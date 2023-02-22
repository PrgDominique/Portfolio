export const Icon = ({ src, alt }: any) => {
  return (
    <div>
      <img src={src} alt={alt} width={75} className='hover:animate-ping' />
    </div>
  )
}
