import React from 'react'

const GifList = ({pic}) => {
  return (
    <ul className='gif-container'>
      {pic.map((gif) => (
        <li className='gif-li' key={gif.url}>
          <img className='gifImg' src={gif.url} alt="gif" />
        </li>
      ))}
  </ul>
    
  )
}

export default GifList