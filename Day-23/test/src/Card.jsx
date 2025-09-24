import React from 'react'

const Card = ({title , description , image , setOpen , id , setSelectedProductId}) => {
  return (
    <div className='card' onClick={()=>{setOpen(true);
      setSelectedProductId(id);
    }}>
        <img src={image} alt="" className='image' />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card