import React, { useState }  from 'react'
import Input from '../../reusables/Input'
import "./login.css"
import img from '../../../../assets/background.svg'
import Button from '../../reusables/Button'
import Img from '../../../../assets/bottom.svg'

const Login = (props) => {

    let {setState, setAuthenticated} = props;

    const inputFields = [
        {name: "email", label: 'email', placeholder: 'Enter your email'},
        {name: "password", label: 'password', placeholder: 'Enter your password'}
] 

const initialData = {
    email: "", password: ""
}

const [inputData, setInputData] = useState(initialData)

const handleLogin = () => {
    if (inputData.email !== ""  && inputData.password !== "") {
        let email = inputData.email 
        localStorage.setItem("userEmail", email)
        setAuthenticated(true)
} else {
    alert ("User Info Is Incomplete")
}
}

const handleInput = (e) => {
    let data = {...inputData, [e.target.name]: e.target.value}
    setInputData(data)
}
    return (
        <div className = "login_container">
        <div className = "login_header">
            <div className = "ewa_logo">       
            </div>.
            <button onClick = {() => setState("register")}>
                REGISTER
            </button>
        </div>
        <img className = 'top_circle' src = {img} alt = 'circlebackground' />

        <div className = 'text_container'>
            <h4>Welcome Ewa</h4>
            <p>Get access to amazing ewa deals from the comfort of your home </p>
        </div>

        <div className = "form_container">
              {inputFields.map((field, index) => <Input value = {inputData[field.name]}
              onChange = {handleInput} key = {index} field = {field} />)}
        </div>
        <img className = "bottom_circle" src = {Img} alt = 'circlebackground'/>
        <Button name = "login" onClick = {handleLogin}/>
            
        </div>
    )
}

export default Login
