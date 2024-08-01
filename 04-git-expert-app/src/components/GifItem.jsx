import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({title,images,id}) => {
  return (
    <div className='card'>
        <img src={images.downsized.url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
}