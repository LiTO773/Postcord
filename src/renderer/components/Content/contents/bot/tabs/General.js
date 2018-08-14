import React from 'react'

export default props => {
  const list = Object.keys(props.bot.user).map((val, index) => {
    if (props.bot.user[val] !== null) {
      return <p key={index}>{val} - {props.bot.user[val].toString()}</p>
    }
  })
  return (
    <div>
      {list}
    </div>
  )
}
