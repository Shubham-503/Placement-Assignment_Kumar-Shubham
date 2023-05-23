import React from 'react'
import "./Button.css"

const Button = ({value,onClick,setTotal}) => {
  return (
    <div className="btn" onClick={()=>onClick(value)}>{value}</div>
  )
}

export default Button