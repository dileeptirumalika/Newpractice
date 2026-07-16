import { useRef, useState } from "react"
import "./App.css"

function Sty(){

    let x = useRef(0)
    let colors = useRef()
    let [starting,updating] = useState(0)
    let [message,setmessage] = useState("")

    function adding(){
        x.current = x.current +1;
        colors.current.classList="active"
    }
    function resets(){
        x.current = 0
        setmessage("")
        updating(0)
        colors.current.classList="inactive"
    }
    return(<>
    <h1 ref={colors} className="inactive">This is href practice</h1>
    <h1>Increase button to increase the count.</h1>
    <h2> Current count is: {x.current} </h2>
    <button onClick={()=>{
        console.log(x.current)
        adding()
    }}>Increase</button>
    <h2>To know the increased count press below</h2>
    <button onClick={()=>{
        updating(starting+1)
        if (x.current === 0){
            setmessage("increase the value");
        }else{
            setmessage("")
        }
    }}>View</button>
    <p>{message}</p>
    <button onClick={()=>{
        resets()
    }}>Reset</button>
    </>)
}
export default Sty


// import { useRef, useState } from "react"
// import "./App.css"

// function Sty(){
//     let initi = useRef()

//     let x = useRef(10)
//     let [currentp, updatedp]=useState(1)
//     function updatedd(){
//         updatedp(currentp+1)
//     }
//     return(<>
//     <h1 ref={initi} className="active"> This is href practice  no {currentp}</h1>
//     <p> value of the x is :{x.current}</p>
//     <p>new value is {currentp}</p>
//     <button onClick={()=>{
//         console.log(initi)

//         console.log(initi.current)
//         initi.current.classList.toggle("active")
//         initi.current.classList.toggle("inactive")

//         x.current = x.current + 10
//         console.log(x)
        
//         updatedd()
//     }}>Click</button>
//     </>)
// }
// export default Sty

// function Sty(){
//     let allnames = [{id:1,name:"Dileep"},{id:2,name:"Raki"},{id:3,name:"Jani"},{id:4,name:"Mani"},{id:5,name:"Raju"},{id:6,name:"Vijay"},{id:7,name:"Siva"}]
//     return(<>
//     <h1>List method Testing</h1>
//     {
//         allnames.map(
//             (names)=><li key={names.id}>{names.id}. {names.name}</li>
//         )
//     }
//     </>)
// }
// export default Sty

// import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
// import Home,{Services,} from "./home.js"
// function Sty(){
//     return(<>
//     <h1>This is route params practice</h1>
//     <BrowserRouter>
//     <Threads/>
//     <Routes>
//         <Route path="/home" element={<Home/>}></Route>
//         <Route path="/services/:id" element={<Services/>}></Route>
//         <Route path="*" element={<h1>Page is not found Error 404...</h1>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </>)
// }
// export default Sty

// function Threads(){
//     return(<>
//     <ul>
//         <li><Link to={"/home"}>Home</Link></li>
//         <li><a href={"/services/10?leter=Leave&matter=Marriage"}>Services</a></li>
//     </ul>
//     </>)
// }

// import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
// import Home,{Services,} from "./home.js"
// function Sty(){
//     return(<>
//     <h1>This is route params practice</h1>
//     <BrowserRouter>
//     <Threads/>
//     <Routes>
//         <Route path="/home" element={<Home/>}></Route>
//         <Route path="/services/:id" element={<Services/>}></Route>
//         <Route path="*" element={<h1>Page is not found Error 404...</h1>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </>)
// }
// export default Sty

// function Threads(){
//     return(<>
//     <ul>
//         <li><Link to={"/home"}>Home</Link></li>
//         <li><Link to={"/services/10?leter=Leave&matter=Marriage"}>Services</Link></li>
//     </ul>
//     </>)
// }

// import Home,{Details,Services} from "./home"
// import {BrowserRouter,Routes,Route, Link} from "react-router-dom"

// function Sty(){
//     return(<>
//     <h1>Welcome to the React Rout</h1>
//     <BrowserRouter>
//     <Links/>
//     <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/details" element={<Details/>}></Route>
//         <Route path="/services/:id" element={<Services/>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </>)
// }
// export default Sty
// function Links(){
//     return(<>
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/details">Details</Link></li>
//         <li><Link to="/services/1?posts=200&category=dp">Services</Link></li>
//     </ul>
//     </>)
// }


// import Home,{Details,Services,Plus,Premium} from "./home"
// import {BrowserRouter,Routes,Route, Link} from "react-router-dom"

// function Sty(){
//     return(<>
//     <h1>Welcome to the React Router</h1>
//     <BrowserRouter>
//     <Links/>
//     <Routes>
//         <Route path="home" element={<Home/>}></Route>
//         <Route path="details" element={<Details/>}></Route>
//         <Route path="services" element={<Services/>}>
//            <Route path="plus" element={<Plus/>}></Route>
//            <Route path="premium" element={<Premium/>}></Route>
//         </Route>
//     </Routes>
//     </BrowserRouter>
//     </>)
// }
// export default Sty

// function Links(){
//     return(<>
//     <ul>
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/details">Details</Link></li>
//         <li><Link to="/services">Services</Link></li>
//     </ul>
//     </>)
// }

// import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
// import Home from "./home.js"
// import About from "./about.js"
// import Login from "./login.js"
// import  Contact,{Complaint,Feedback} from "./contact.js"

// function Header(){
//         return(<>
//         <ul>
//             <li> <Link to="/home">Home</Link></li>
//             <li> <Link to="/about">About</Link></li>
//             <li> <Link to="/login">Login</Link></li>
//             <li> <Link to="/contact">Contact</Link></li>
//         </ul>
//         </>)
//     }
// function Sty(){
//     return(
//         <>
//         <BrowserRouter>
//         <div>Welcome to React Router</div>
//         <Header/>
//         <Routes>
//             <Route path="home" element={<Home/>}></Route>
//             <Route path="about" element={<About/>}></Route>
//             <Route path="login" element={<Login/>}></Route>
//             <Route path="contact" element={<Contact/>}>
//                  <Route path="contactnumber" element={<Complaint/>}></Route>
//                  <Route path="feedbackmail" element={<Feedback/>}></Route>
//             </Route>
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }
// export default Sty

// import img from "./logo512.png"
// function Sty(){
//     return(
//         <>
//         <p>Images</p>
//         <img src="/images/logo192.png" alt="images"></img>
//         <img src={img} alt="imgs"></img>
//         </>
//     )
// }
// export default Sty

// import { useEffect, useState } from "react"
// import Productcard from "./productcard.js"
// import "./App.css"

// function Sty(){
//     let [usersdata,updateusers]=useState([])
//     useEffect(()=>{
//         getusers()
//     },[])
//     async function getusers(){
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         let userslist = await response.json()
//         updateusers(userslist)
//         console.log(userslist)
//     }
//     if(usersdata.length === 0){
//         return(<h1>Fetching Data . . .</h1>)
//     }
//     return(<>
//     <div className="product-list">
//         {
//             usersdata.map((details)=>(<Productcard {...details} key={details.id}/>))
//         }
//         <h1>Limit has been reached . . </h1>
//     </div>
//     </>)
// }
// export default Sty

// import {useEffect, useState} from "react"
// import "./App.css"
// import Productcard from "./productcard"

// function Sty(){
//     let [products,updateproducts]=useState([])
//     useEffect(
//         ()=>{
//             getProducts()
//     },[])
//     async function getProducts(){
//     try{
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let productslist = await res.json()
//     updateproducts(productslist)
//     console.log(productslist)
// } catch(err){
//             console.log("err",err)
//         }}
//     if(products.length === 0){
//         return (<h1>Fetching data . . .</h1>)
//     }
//     return(
//     <>
//     <div className="product-list">
//     {
//     products.map((details)=> <Productcard {...details} key={details.id}></Productcard>)
//     }
//     </div>
//     </>)
// }
// export default Sty

// import { useEffect, useState } from "react"

// function Sty(){
//     let [timer,setTimer]= useState(0)
//     let [count, setcount]=useState(0)
//     useEffect(
//         ()=>{
//             console.log("use effect")
//     },[count,timer]
// )
//     return(
//         <>
//         <h1>timer 1 : {timer}
//             {console.log("inside component")}
//         </h1>
//         <h1>timer 2 : {count}</h1>
//         <button onClick={()=>{
//             setcount(count+1)
//         }}>No 1</button>
//         <button onClick={()=>{
//             setTimer(timer+1)
//         }}>No 2</button>
//         </>
//     )
// }
// export default Sty

// import Stateschange from "./props"
// import { useEffect, useState } from "react"

// function Sty(){
//     let [initial,updater]=useState(1)
//     useEffect(()=>{
//         console.log(`fan ${initial} on`)
//     return()=>{console.log(`fan ${initial} off`)}},[initial])
//     return(<>
//     <h1>Adding</h1>
//     <h4>{initial}</h4>
//     <button onClick={()=>{updater(initial+1)}}>Press here</button>
//     <Stateschange/>
//     </>)
// }
// export default Sty

// import "./App.css"

// let loggedIn = true;
// let adminLoggedIn = true;
// function Sty(){
//     return(<>
//         <Header></Header>
//             {
//                 adminLoggedIn && <AdminLog/>
//             }
//         </>
//     )
// }
// export default Sty
// function AdminLog(){
//     return(<>
//         <p>Welcome, Admin!</p>
//         </>
//     )
// }
// function Header(){
//     return(
//         <ul>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//             {
//                 loggedIn ? <li>Logout</li> : <li>Login</li>
//                 // loggedIn ? <li>Logout</li> : null
//                 // loggedIn ? null : <li>Login</li>
//             }
//         </ul>
//     )
// }

// import { useState } from "react"

// function Sty(){
//     const [value, setValue] = useState(0)
//     let items = [1,2,3,4,5]
//     function increasevalue(){
//        setValue(value+1)
//         if(value === 20){
//             alert(`Value is reached to ${value}`)
//             setValue(0)
//         }
//     }
//     return(<>
//     <h1>INCREMENT APP</h1>
//     <p>Value: {value}</p>
//     <button onClick={()=>{increasevalue()}}>Click here</button>
//     <ul>
//         {items.map((item)=>{return(<li> Item no: {item}</li>)})}
//     </ul>
//     </>)
// }
// export default Sty

// import React, { useState } from "react"
// import Buttons from "./keypad"
// import "./App.css"

// function Sty(){
//    let [initialvalue,updatevalue]=useState("")

//    function enterkey(fresh){
//     return(
//         updatevalue(initialvalue+fresh))
//    }
//    function solution(){
//     let outputresult = eval(initialvalue)
//     updatevalue(outputresult)
//    }
//    function totalclear(){
//     return(
//     updatevalue("")
//     )
//    }
//     return(
//         <>
//         <div className="container">
//         <div>
//             <h1>React Calculator App</h1>
//         </div>
//         <div>
//             <input value={initialvalue} className="inputs"></input>
//         </div>
//         <div>
//             <Buttons enterkey={enterkey} solution={solution} totalclear={totalclear}/>
//         </div>
//         </div>
//         </>
//     )
// }
// export default Sty

// function Sty (){
//     let [initialvalue,gettingvalue] = useState("")

//     function givetoinput(value){
//         return(
//             gettingvalue(initialvalue + value)
//         )
//     }
//     function solution(){
//             let answer = eval(initialvalue)
//             gettingvalue(answer)
//     }
//     function emptyinput(){
//         return(gettingvalue(""))
//     }
//     return(<>
//     <div>
//         <h1>Calculator App</h1>
//     </div>
//     <div>
//         <input value={initialvalue}></input>
//     </div>
//     <div>
//         <Keeys givetoinput={givetoinput} solution={solution} emptyinput={emptyinput}/>
//     </div>
//     </>)
// } 
// export default Sty

// import { useState } from "react"
// import "./App.css"
// import Keypad from "./keypad"
// function Sty(){
//     let [input, setInput] = useState("")
//     function handleClick(value){
//         setInput(input+value)
//     }
//     function calculate(){
//     let outputval = eval(input)
//     setInput(outputval)
// }
// function handleClear(){
//     setInput("")
// }
//     return(<div>
//         <div className="container">
//         <h1>Calculator App</h1>
//         <div className="calculator">
//             <input type="text" className="output" value={input}></input>
//             <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
//         </div>
//         </div>
//         </div>
//     )
// }
// export default Sty

// function Sty(){
//     let [num,updateNum] = useState(100)
//     return(<>
//         <h1>{num}</h1>
//         <button onClick={()=>{
//             updateNum(200)
//         }}>Click</button>
//         <input type="text" value={num} onChange={(e)=>{
//             let temp = e.target.value
//             updateNum(Number(temp))}}></input>
//         </>)
// }
// export default Sty

// function Sty(){
//     let [initial,addNewvalue]=useState("")
//     let [presentList,updateList]=useState([
//         {id:1,task:"Tasks List"}
//     ])

//     function addnewTask(){
//         if(initial===""){
//             alert("Add new Task")
//         }else{
//         let newlist = [...presentList,
//             {id:Date.now(),
//             task:initial}
//         ]
//         updateList(newlist)
//         addNewvalue("")}
//     }
//     function deletelist(id){
//         let newtasklist = presentList.filter((list)=>{
//             return list.id !==id
//         })
//         updateList(newtasklist)
//     }

//     return(<div>
//         <h1>Todo App</h1>
//         <input type="text" value={initial} onChange={(e)=>{
//             let newtext = e.target.value
//             addNewvalue(newtext)
//         }}></input>
//         <button onClick={
//             addnewTask
//         }>Add</button>
//         <ul>
//             {presentList.map((list)=>(
//                 <li>{list.task} <button onClick={()=>{
//                     deletelist(list.id)
//                 }}>❌</button></li>
//             ))}
//         </ul>
//     </div>)
// }
// export default Sty

// function Sty(){
//     let [todoInput,updateInput] = useState("")
//     let [todoList,updateTodos] = useState([
//         {id:1, task:"Leran React"}
//     ])
//     function addNewTodo(){
//         if(todoInput===""){
//             alert("Add new Task")
//         }
//         else{
//             let newTodos = [
//                 ...todoList,
//                 {
//                     id:Date.now(),
//                     task:todoInput
//                 }
//             ]
//             updateTodos(newTodos)
//             updateInput("")
//         }
//     }
// function deleteTodo(id){
//     let filterTodos = todoList.filter(
//         (todo)=>{
//             return todo.id !==id
//         }
//     )
//     updateTodos(filterTodos)
// }
//     return(
//         <div>
//         <h1> Todo List</h1>
//         <input type="text" 
//         value={todoInput} 
//         onChange={(e)=>{
//             let task = e.target.value
//             updateInput(task)
//         }}></input>
//         <button onClick={()=>{
//             addNewTodo()
//         }}>Add</button>
//         <ul>
//             {
//                 todoList.map((todo)=>(
//                     <li>
//                         <p>{todo.task}</p>
//                         <button onClick={()=>{
//                             deleteTodo(todo.id)
//                         }}>❌</button>
//                     </li>
//                 ))
//             }
//         </ul>
//         </div>
//     )
// }
// export default Sty

// function Sty(){
//     let[todoInput,updateInput]=useState("Type here")
//     let[todoList,updateTodos]=useState(
//     [{id:1, task: "learn React"},
//      {id:2, task: "learn Angular"}])

// let nextid = 3

// function addNewTodo(){
// if(todoInput===""){
//     alert("add some task")
// }
// else{
//     let newTodos = [
//         ...todoList,
//         {id: nextid ++, task: todoInput}
//     ]
//     updateTodos(newTodos);
//     updateInput("")
// }
// }
// function deleteTodo(id){
//    let filterTodos = todoList.filter(
//         (todo)=>{
//             return todo.id!==id
//         }
//     )
//     updateTodos(filterTodos)
// }
//     return(
//         <div className="container mt-5 w-50">
//             <h3 className="text-center">Todo App</h3>
//             <div className="input-group">
//                 <input type="text" className="form-control" value={todoInput} onChange={(e)=>{
//                     let task = e.target.value
//                     updateInput(task)
//                 }}/>
//                 <button className="btn btn-primary" onClick={()=>{
//                     addNewTodo()
//                 }}>Add</button>
//             </div>
//             <ul className="list-group mt-4">
//              {
//                 todoList.map(
//                     (todo)=>(
//                            <li className="list-group-item">
//                     <p>{todo.task}</p>
//                     <button onClick={()=>{
//                         deleteTodo(todo.id)
//                     }} className="btn">❌</button>
//                 </li>
//                     )
//                 )
//              }
//             </ul>
//         </div>
//     )

// }
// export default Sty

// function Sty(){
//     let [present,updateNew]=useState("Tasks list")
//     return(
//         <>
//         <h1>Todo App in React</h1>
//         <div>
//         <input id="updated"></input>
//         <button onClick={()=>{
//             let data = document.getElementById("updated").value;
//             updateNew(data+present)
//         }}>Add</button>
//         </div>
//         <div>
//             <h5>{present}</h5>
//         </div>
//         </>
//     )
// }
// export default Sty

// import React from "react"
// import './App.css'
// import Products from "./props"

// function Sty(){
//     let prods1 = {
//         id: 1,
//         name: "Lava Iris X8",
//         aprice: 30000,
//         dprice: 25000
//     }
//     return(<>
        
//         <Products {...prods1}/>
//         </>
//     )
// }
// export default Sty

// function Sty(){
//     let [initial,updated]=useState(0)
//     let stock = 10;
//     return(
//         <>
//         <h2>Counter App</h2>
//         <div className="counter">
//             <button className="decrease" disabled={initial === 0} onClick={()=>{
//                 if(initial>0){
//                     updated(initial-1)
//                 }
//             }}>-</button>
//             <p>{initial}</p>
//             <button className="increase" disabled={initial === stock} onClick={()=>{
//                 if(initial<10){
//                     updated(initial+1)
//                 }
//             }}>+</button>
//         </div>
//         </>
//     )
// }
// export default Sty

// function Sty(){
//    let [initial,updated]=useState(0)
//    let stock = 10;
//     return(
//         <>
//         <h3>Counter App</h3>
//         <div className="shed">
//             <button className="decrease" disabled={initial === 0} onClick={()=>{
//                 if(initial>0){
//                     updated(initial-1)
//                 }
//             }}>-</button>
//             <p>{initial}</p>
//             <button className="increase" disabled={initial === stock} onClick={()=>{
//                 if(initial<10){
//                     updated(initial+1)
//                 }
//             }}>+</button>
//         </div>
//         </>
//     )
// }
// export default Sty

// function Sty(){
//     let [initial,updated] = useState("#ffffff");
//     useEffect(()=>{ 
//         document.body.style.backgroundColor = initial}, [initial]
//      );
//     return(
//        <div style={{backgroundColor: initial,}}>
//        <h1>Select the color.</h1>
//        <input type="color" onChange={(fresh)=>{
//         updated(fresh.target.value)
//        }} ></input>
//        </div>
//     )
// }
// export default Sty

// function Sty(){
//     return(
        
//         <div className="Newname">
//         <h1>Change the background color.</h1>
//         <input type="color" id='new' onChange={  
//             (e)=>{
//                document.body.style.backgroundColor = e.target.value
//             }
//         }></input>
//         </div>
//     )
// }
// export default Sty

// function Sty(){
//     let [initial,updateprice]= useState({
//         product: "Mi 10 pro",
//         price: 40000
//     })
//     return(<>
//     <h1>Product is: {initial.product}</h1>
//     <h1>Price is: {initial.price}</h1>
//     <p>product: {JSON.stringify(initial)}</p>
//     <input id="newprice"></input>
//     <button onClick={()=>{
//       let young =  document.getElementById("newprice").value;
//       updateprice({
//         ...initial,
//         price:young
//       })
//       console.log(young)
//     }}>Update</button>
//     </>)}
// export default Sty

// function Sty(){
//     let [initial,updateprice]= useState({
//         product: "Mi 10 pro",
//         price: 40000
//     })
//     return(<>
//     <h1>Product is: {initial.product}</h1>
//     <h1>Price is: {initial.price}</h1>
//     <p>product: {JSON.stringify(initial)}</p>
//     <input id="newprice"></input>
//     <button onClick={()=>{
//       let young =  document.getElementById("newprice").value;
//       updateprice({
//         product : initial.product,
//         price : young
//       })
//       console.log(young)
//     }}>Update</button>
//     </>)}
// export default Sty

// function Sty(){
//     let [initialname,updatedname]= useState("Note 11pro")
//     let [initialprice,updateprice]= useState(30000)
//     return(<>
//     <h1>Product is: {initialname}</h1>
//     <h1>Price is: {initialprice}</h1>
//     <input id="newprice"></input>
//     <button onClick={()=>{
//       let young =  document.getElementById("newprice").value;
//       updateprice(young)
//     }}>Update</button>
//     </>)}
// export default Sty

// function Sty(){
//     let [initialname,updatedname]= useState("Note 11pro")
//     let price = 50000
//     return(<>
//     <h1>Product is: {initialname}</h1>
//     <h1>Price is: {price}</h1>
//     <input id="newname"></input>
//     <button onClick={()=>{
//       let young =  document.getElementById("newname").value;
//       updatedname((initialname)=>{
//         return initialname +  young
//       })
//     }}>Update</button>
//     </>)}
// export default Sty

// function Sty(){
//     let [product,updatedName] = useState("Redmi 18 pro")
//     let price = 40000
//     return(<>
//     <h2>The product name is: {product} </h2>
//     <h3>price is: {price} </h3>
//     <input id="new"></input>
//     <button onClick={()=>{
//         let newname = document.getElementById('new').value;
//         updatedName(newname)
//     }}>Update</button>
//     </>)}
// export default Sty

// function Sty(){
//     let price = 30000
//     let [product,newname] = useState("Lava 8X")
//     return(
//         <>
//         <h1>Product is: {product}</h1>
//         <h1>price is: {price}</h1>
//         <input id="new"></input>
//         <button onClick={()=>{
//             let fresh = document.getElementById('new').value;
//             newname(fresh)
//         }}>Update</button>
//         </>)}
// export default Sty

// class Sty extends React.Component{
//     state = {
//         product: "Lava 8x",
//         price: 30000
//     }
//     render(){
//         return(<>
//         <h1>Product is: {this.state.product}</h1>
//         <h2>Price is: {this.state.price}</h2>
//         <input type="number" id='new'></input>
//         <button onClick={this.updatePrice}>Update</button>
//         </>
//         )
//     }
//         updatePrice(){
//             let r = document.getElementById ('new').value;
//             console.log(r);
//             this.setState({
//                 price:r
//             },()=>{
//              console.log(this.state)
//             })
//         }
//          constructor(){
//         super()
//         this.updatePrice = this.updatePrice.bind(this)
//     }  
//     }
// export default Sty

// class Sty extends React.Component{
//     state = {
//         product: "Lava 8x",
//         price: 30000
//     }
//     render(){
//         return(<>
//         <h1>Product is: {this.state.product}</h1>
//         <h2>Price is: {this.state.price}</h2>
//         <input type="number" id='new'></input>
//         <button onClick={this.updatePrice}>Update</button>
//         </>
//         )
//     }
//         updatePrice(){
//             let r = document.getElementById ('new').value;
//             console.log(r);
//             this.setState({
//                 price:r
//             })
//             console.log(this.state)
//         }
//          constructor(){
//         super()
//         this.updatePrice = this.updatePrice.bind(this)
//     }
//     }
// export default Sty

// class Sty extends React.Component{
//     state = {
//         product: "Lava 8x",
//         price: 30000
//     }
//     render(){
//         return(<>
//         <h1>Product is: {this.state.product}</h1>
//         <h2>Price is: {this.state.price}</h2>
//         <input type="number" id='new'></input>
//         <button onClick={()=>{
//             let r = document.getElementById ('new').value;
//             console.log(r);
//             this.setState({price:r})
//             console.log(this.state)
//         }}>Update</button>
//         </>)}}
// export default Sty

// class Sty extends React.Component{
//     state = {product : "Lenovo thinkpad 5 pro",
//         price : 90000}
//     render(){
//         return(<>
//         <h1>Product: {this.state.product}</h1>
//         <h2>Price: {this.state.price}</h2>
//         <input id = 'price' type="number"></input>
//         <button onClick={()=>{
//             let p = document.getElementById('price').value;
//             console.log(p);
//             this.setState({price:p})
//             }}>Update</button>
//         </>)
//     }
// }
// export default Sty

// class Sty extends React.Component{
//     state = { initial:0}
//     render(){
//         return(<>
//         <h1>Initial value is:{this.state.initial}</h1>
//             <button onClick={()=>{
//                 this.setState({
//                     initial:this.state.initial+1
//                 })}}>Increase</button></>)}}
// export default Sty


// import React, {useState} from "react"

// function Sty(){
//     let [initial,increment]= useState(0)
//     return(
//         <>
//         <h1>Initial value is: {initial}</h1>
//         <button onClick={()=>{
//             increment(initial+1)
//         }}>Increase </button>
//         </>
//     )
// }


// export default Sty

// import React from "react"
// function Sty(){
    
//      return(
//      <div style={{'display':'flex' ,'gap':'5px'}}>
//             <Frag/>
//         </div>
//      )
// }
// function Frag(){
//     return(<>
//         <div style={{'color':'red'}}>hai</div>
//         <div>hello</div>
//         <div>how</div>
//         </>

//     )
// }
// export default Sty


// let Sty = ()=>{
//     return (
//     <div>
//             <h1>This is testing 1</h1>
//             <h1>This is testing 2</h1>
//         </div>
//     )
// }
// export default Sty

// import Data from "./props"
// function Sty(){
//     let users=[{name:"dileep", age: 25 ,city: "Tpt"},
//         {name:"Raki", age:25, city:"Tpt"},
//     ]
//     return(<>{
//     users.map(
//         (details)=>( <Data key={details.name} details={details}/>)
//     )
// }
//     </>
//     )
// }
// export default Sty