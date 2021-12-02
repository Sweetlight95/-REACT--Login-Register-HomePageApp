import React, {useState} from 'react'
import Input from '../../reusables/Input'
import img from '../../../../assets/background.svg'
import Button from '../../reusables/Button'
import Img from '../../../../assets/bottom.svg'
import './register.css'

const Register = (props) => {
    let { setState } = props

    let initialData = {
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    }
    const [inputData, setInputData] = useState(initialData)

    function handleInput(e) {
       let data = { 
           ...inputData, [e.target.name]: e.target.value
       }
       setInputData(data)
    }

    const inputFields = [
        {label: 'FirstName', placeholder: 'Enter your firstname'},
        {label: 'LastName', placeholder: 'Enter your lastname'},
        {label: 'Email', placeholder: 'Enter your email'},
        {label: 'Password', placeholder: 'Enter your password'},
        {label: 'Confirm Password', placeholder: 'Confirm your password'}
 
] 
    return (
       
    <div className = "register_container">
        <div className = "register_header">
            <div className = "ewa_logo">       
            </div>
            <button onClick = {() => setState ("login")} >
                LOGIN
            </button>
        </div>
        <img className = "top_circle" src = {img} alt = "circlebackground"/>

        <div className = 'text_container'>
            <h4>Welcome Ewa</h4>
            <p>Get access to amazing ewa deals from the comfort of your home </p>
        </div>

        <div className = "form_container">
              {inputFields.map((field, index) => <Input onChange = {handleInput} key = {index} field = {field} />)}
        </div>
        <img className = "bottom_circle" src = {Img} alt = 'circlebackground'/>
        <Button name = "register"/>
    </div>

    )
}

export default Register
