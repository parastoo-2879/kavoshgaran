import { useEffect, useState } from "react";
import "./shop.css"
import { Data } from "./data";
export default function Shop(){
  return(
    <div className="main">
    <Header />
    <Search/>
    <List/>
    </div>
  )
}



function Header () { 
let username = localStorage.getItem("username");
  return(
    <header className="border row p-0 m-0">
      <section className="col-6" >results : <span id="results">200</span></section>
      <section className="col-6 d-flex justify-content-center">Welcome Dear {username}</section>
    </header>
  )

 }


function Search () { 
 
  const change = (e) => {
    let flag = 0
    let input = document.getElementById("inp").value
    let h6 = document.querySelectorAll(".items>h6")
    h6.forEach(val => {
      // val.parentElement.style.display = "flex"
      if(input.trim != null){
        console.log(input)
        val.parentElement.style.display = "none"
        if (val.innerHTML.indexOf(input) != -1) {
          val.parentElement.style.display = "flex"
          flag++
        } else {
          val.parentElement.style.display = "none"
        }
      }else{
        val.parentElement.style.display = "flex"
      }
      console.log(e.target.value)
      document.getElementById("results").innerHTML = flag
    })
    console.log(e.target.value)

  }

  return(
    <div>
      <input type="text" id="inp" onInput={change} />
    </div>
  )
 }



 function List () {
  const [state,setState] = useState([]) 
// console.log(Data)

  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(response => response.json())
          .then(json => {
            console.log(json)
            setState(json)
          })

  },[])



  // if internet is not conected or vpn doesn't work

  // useEffect(()=>{
  //  console.log(Data)
  //  setState(Data)
  // },[])





  function Edit(e){

    let x = e.target.previousElementSibling.innerHTML
    document.getElementById("editInp").value=x
    document.getElementsByClassName("editor")[0].classList.toggle("d-none")
  }


 return(
    <div className="list row justify-content-center p-0 m-0 w-100 border relative">
          <ul className="row p-0 m-0 border justify-content-center ">
              {
                state.map(item=>{
                  return(
                    <li className="col-3 m-3 p-0 border items" key={item.id}>
                        <span className=" d-flex h-100  p-0 m-0 border justify-content-center align-items-center col-1">{item.id}</span>
                        <h6 className="col-9 d-flex h-100  border justify-content-center align-items-center">{item.title}</h6>
                        <button className="col-2 p-0 m-0 h-100" onClick={Edit} id="edit">Edit</button>
                    </li>
                  )
                })
              }
          </ul>
      <Editor/>
    </div>
 )
   }

   function Editor(){
    // console.log("props is: ",value)
    const [state, setState] = useState("value")
    console.log(state)
    const close = () => {
      document.getElementsByClassName("editor")[0].classList.add("d-none")
    }
    
    const change = (e) => {
      setState(e.target.value)
    }
    return(
          <section className=" w-100  d-flex justify-content-center align-items-center editor d-none ">
              <div className="col-6  h-50 row justify-content-center align-items-center">
                <input type="text" className="col-11" id="editInp" value={state} onChange={change}/>
                <button className="col-2 m-2" onClick={close}>Ok</button>
                <button className="col-2 m-2" onClick={close} >Cancel</button>
              </div>
          </section>
    )
   }