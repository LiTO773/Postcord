import React from 'react'

export default props => {
  return (
    <div className="header">
      <div className="flex">
        <img className="header-img" src={props.bot.avatarURL} alt=""/>
        <h1>{props.bot.username}
          <span className="header-discriminator">#{props.bot.discriminator}</span>
        </h1>
      </div>
    </div>
  )
}
