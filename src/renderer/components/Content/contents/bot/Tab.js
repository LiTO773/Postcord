import React from 'react'

export default props => {
  return (
    <div
      className={props.name.toLowerCase() === props.currentRoute ? "tab active-tab": "tab"}
      onClick={() => props.changeRoute(props.name.toLowerCase())}>
      {props.name}
    </div>
  )
}
