import React from 'react'

export const MostrarImagenes = ({img}) => {

    console.log(img);
  return (
    <>  
        <div className='flex-card'>
          <h1>{img.title}</h1>
          <img src={img.url}></img>  
        </div>
    </>

  )
}
