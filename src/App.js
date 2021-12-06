import Auth from "./ewa/views/auth/Auth"
import './App.css';
import Dashboard from "./ewa/views/dashboard/Dashboard";
import {useState} from "react"

function App() {
  let value = false
  let email = ""

  try {
    email = localStorage.getItem("userEmail")
    if (email !== "" && email !== null) {
      console.log(email)
      value = true
    }
  } catch(error) {
    email = ""
    value = false
  }
  const [authenticated, setAuthenticated] = useState(value)
  return (
    <div className="container">
      {authenticated ? <Dashboard /> : <Auth setAuthenticated = {setAuthenticated} />}
    </div>
  );
}

export default App;
