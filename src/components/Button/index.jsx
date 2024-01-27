import React from 'react'
import './styles.css'

const Button = ({ onClick, text, disabled }) => {
  return (
    <button className='button' disabled={disabled} onClick={onClick}>{text}</button>
  )
}

export default Button