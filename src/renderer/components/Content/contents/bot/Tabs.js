import React from 'react'
import Tab from './Tab'

export default props => {
  return (
    <div className="tabs">
      <Tab name="General" changeRoute={props.changeRoute} currentRoute={props.route} />
      <Tab name="Options" changeRoute={props.changeRoute} currentRoute={props.route} />
      <Tab name="Presences" changeRoute={props.changeRoute} currentRoute={props.route} />
      <Tab name="Emojis" changeRoute={props.changeRoute} currentRoute={props.route} />
    </div>
  )
}
