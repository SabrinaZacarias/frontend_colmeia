import React from 'react'
import './Label.css'

function Label(props) {
  return (
    <label className="label" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}

export default Label