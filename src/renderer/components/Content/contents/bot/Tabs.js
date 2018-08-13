import React from 'react'
import Tab from './Tab'

export default props => {
  return (
    <div className="tabs">
      <Tab name="General" changeRoute={props.changeRoute} />
      <Tab name="Options" changeRoute={props.changeRoute} />
      <Tab name="Presences" changeRoute={props.changeRoute} />
      <Tab name="Emojis" changeRoute={props.changeRoute} />
    </div>
  )
}
