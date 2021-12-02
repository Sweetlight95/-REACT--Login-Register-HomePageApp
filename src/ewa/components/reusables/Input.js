import React from 'react'

const Input = (props) => {
    let { field, onChange } = props

    return (
    <div className="input_container">
        <p>{field.label}</p>
        <input name={field.name} onChange={onChange} placeholder={field.placeholder} />
    </div>
)
    }
export default Input
