import { img_logo, svg_loader } from '../../../utils/assets'

export const Footer = () => {
  return (
    <div className='bg-slate-950 h-[50vh] relative  w-full'>
      <div className='absolute h-full content-center w-full'>
        <img src={img_logo} alt="" className='h-[30vh]  opacity-[1] m-auto' />
      </div>
      <div className='absolute h-full content-center w-full backdrop-grayscale-100'></div>
      <img src={svg_loader} alt="" className='h-[30vh]  opacity-[1] m-auto' />

    </div>
  )
}
