import React from 'react'

export const GifItem = ({title,images,id}) => {
  return (
    <div className='card'>
        <img src={images.downsized.url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
