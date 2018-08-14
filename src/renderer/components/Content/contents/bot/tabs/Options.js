import React from 'react'

export default props => {
  const list = Object.keys(props.bot.options).map((val, index) => {
    if (props.bot.options[val] !== null) {
      return <p key={index}>{val} - {props.bot.options[val].toString()}</p>
    }
  })
  return (
    <div>
      {list}
    </div>
  )
}
