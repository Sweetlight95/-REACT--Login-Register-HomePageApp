import React from 'react'

const Button = (props) => {
    let { name, onClick} = props

    return (
      <button onClick = {onClick} className="auth_button">
            {name}
      </button>
    )
}

export default Button
