const  items=[{label:"Accueil", path:""},{label:"A propos", path:""},{label:"Suivre ma demande", path:""}, {label:"Assistance", path:""}]

export const HeaderNavWeb = () => {
  return (
    <div className='md:flex hidden  font-inter gap-4'>
        {items.map(e=><div className="hover:border-b-4  box-borderÒ " key={e.label}>{e.label}</div>)}

    </div>
  )
}
