import React from 'react'
import './styles.css'

const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input 
        className='text-input' 
        type='search' value={searchValue} 
        onChange={handleChange}
        placeholder='Type your search'
    />
  )
}

export default TextInput