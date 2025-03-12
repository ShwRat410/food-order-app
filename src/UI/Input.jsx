import React from 'react'

export default function Input({label, id, type, ...props}) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props}></input>
    </p>
  )
}
