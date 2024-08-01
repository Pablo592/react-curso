import React from 'react';
import { render } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem.jsx>', () => {
  
    const title = 'Saitama'
    const images = {downsized: {url: 'https://localhost/saitama.jpg'}}
    const id = '1234'

    test('debe de hacer match con el snapshot ', () => {
      

        const {container} = render( <GifItem title={title} images={images} id={id} /> )

        expect(container).toMatchSnapshot()
    })
    
})
