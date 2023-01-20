import { useState } from "react"
import "./login.css"
export default function Login () { 

  const [state, Setstate] = useState({
    username: "",
    pass: ""
  })

 const change = () => {
   Setstate(prevstate => {
     return {
       ...prevstate,
       username: document.getElementById("username").value,
       pass: document.getElementById('pass').value
     }
   })
 }
 const submit =(e)=>{
  e.preventDefault()
  const payload = new FormData(e.target)
  console.log(payload.values)
  fetch("https://httpbin.org/post",{
    method:"POST",
    body:payload
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    window.location.replace("http://localhost:3000/shop")
    localStorage.setItem("username", state.username);
  })
  .catch(err=>console.log(err))

 }

 const Redirect=()=>{

 }

  return(
    <div className="d-flex border justify-content-center align-items-center login"  >

      <form onSubmit={submit} id="form" className=" h-50 row w-25 p-5  " >
        <h3 className="col-12">Login</h3>
        <label>Username</label>
        <input type="text" name="username" value={state.username} id="username" onChange={change}/>
        <label>Password</label>
        <input type="password" name="password" value={state.pass} id="pass" onChange={change}/>
        <button type="Submit" onClick={Redirect}>submit</button>
      </form>
    </div>

  )
 } 