

// function Buttons({enterkey,solution,totalclear}){
//     return(
//         <>
//         <div className="numbers">
//         <button onClick={()=>{enterkey("7")}} className="buttons">7</button>
//         <button onClick={()=>{enterkey("8")}} className="buttons">8</button>
//         <button onClick={()=>{enterkey("9")}} className="buttons">9</button>
//         <button onClick={()=>{enterkey("/")}} className="oprators">/</button>
//         </div>
//         <div className="numbers">
//         <button onClick={()=>{enterkey("4")}} className="buttons">4</button>
//         <button onClick={()=>{enterkey("5")}} className="buttons">5</button>
//         <button onClick={()=>{enterkey("6")}} className="buttons">6</button>
//         <button onClick={()=>{enterkey("*")}} className="oprators">*</button>
//         </div>
//         <div className="numbers">
//         <button onClick={()=>{enterkey("1")}} className="buttons">1</button>
//         <button onClick={()=>{enterkey("2")}} className="buttons">2</button>
//         <button onClick={()=>{enterkey("3")}} className="buttons">3</button>
//         <button onClick={()=>{enterkey("-")}} className="oprators">-</button>
//         </div>
//         <div className="numbers">
//         <button onClick={()=>{enterkey("0")}} className="buttons">0</button>
//         <button onClick={()=>{solution()}} className="solutions">=</button>
//         <button onClick={()=>{totalclear()}} className="solutions">c</button>
//         <button onClick={()=>{enterkey("+")}} className="oprators">+</button>
//         </div>
//         </>
//     )
// }
// export default Buttons

// function Keeys({givetoinput,solution,emptyinput}){
//     return(<>
//         <div>
//             <button onClick={()=>{givetoinput("9")}}>9</button>
//             <button onClick={()=>{givetoinput("8")}}>8</button>
//             <button onClick={()=>{givetoinput("7")}}>7</button>
//             <button onClick={()=>{givetoinput("/")}}>/</button>
//         </div>
//         <div>
//             <button onClick={()=>{givetoinput("4")}}>4</button>
//             <button onClick={()=>{givetoinput("5")}}>5</button>
//             <button onClick={()=>{givetoinput("6")}}>6</button>
//             <button onClick={()=>{givetoinput("*")}}>*</button>
//         </div>
//         <div>
//             <button onClick={()=>{givetoinput("1")}}>1</button>
//             <button onClick={()=>{givetoinput("2")}}>2</button>
//             <button onClick={()=>{givetoinput("3")}}>3</button>
//             <button onClick={()=>{givetoinput("-")}}>-</button>
//         </div>
//         <div>
//             <button onClick={()=>{givetoinput("0")}}>0</button>
//             <button onClick={()=>{solution()}}>=</button>
//             <button onClick={()=>{emptyinput()}}>c</button>
//             <button onClick={()=>{givetoinput("+")}}>+</button>
//         </div>
//     </>)
// }
// export default Keeys

// function Keypad({handleClick,handleClear,calculate}){
//     return(
//         <div className="keypad">
//             <div className="row">
//                 <button onClick={()=>{handleClick("7")}} className="digit">7</button>
//                 <button onClick={()=>{handleClick("8")}} className="digit">8</button>
//                 <button onClick={()=>{handleClick("9")}} className="digit">9</button>
//                 <button onClick={()=>{handleClick("/")}} className="operator">/</button>
//             </div>
//             <div className="row">
//                 <button onClick={()=>{handleClick("4")}} className="digit">4</button>
//                 <button onClick={()=>{handleClick("5")}} className="digit">5</button>
//                 <button onClick={()=>{handleClick("6")}} className="digit">6</button>
//                 <button onClick={()=>{handleClick("*")}} className="operator">*</button>
//             </div>
//             <div className="row">
//                 <button onClick={()=>{handleClick("1")}} className="digit">1</button>
//                 <button onClick={()=>{handleClick("2")}} className="digit">2</button>
//                 <button onClick={()=>{handleClick("3")}} className="digit">3</button>
//                 <button onClick={()=>{handleClick("-")}} className="operator">-</button>
//             </div>
//             <div className="row">
//                 <button onClick={()=>{handleClick("0")}} className="digit">0</button>
//                 <button className="fun-keys" onClick={()=>{calculate()}}>=</button>
//                 <button className="fun-keys" onClick={()=>{handleClear()}}>c</button>
//                 <button onClick={()=>{handleClick("+")}} className="operator">+</button>
//             </div>
//         </div>
//     )
// }
// export default Keypad