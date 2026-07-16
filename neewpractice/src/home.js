

// import { useParams,useLocation } from "react-router-dom"

// function Home(){
//     return(<>
//     <div>Welcome to the Dashboard</div>
//     </>)
// }
// export default Home
// export function Services(){
//     let {id} = useParams();
//     let details = useLocation();
//     let cleardetails = new URLSearchParams(details.search)
//     let leter = cleardetails.get("leter")
//     let matter = cleardetails.get("matter")
//     return(<>
//     <div>We provide the variety of the services</div>
//     <div>You are on page: {id}</div>
//     <div>Letter Type is: {leter}</div>
//     <div>Matter Type is: {matter}</div>
//     </>)
// }

// import { useParams,useLocation } from "react-router-dom"

// function Home(){
//     return(<>
//     <div>Welcome to the Dashboard</div>
//     </>)
// }
// export default Home
// export function Services(){
//     let {id} = useParams();
//     let details = useLocation();
//     let cleardetails = new URLSearchParams(details.search)
//     let leter = cleardetails.get("leter")
//     let matter = cleardetails.get("matter")
//     return(<>
//     <div>We provide the variety of the services</div>
//     <div>You are on page: {id}</div>
//     <div>Letter Type is: {leter}</div>
//     <div>Matter Type is: {matter}</div>
//     </>)
// }

// export function Errors(){
//     return(<>
//     <div>Sorry the page is not found 404...</div>
//     </>)
// }

// import {useLocation, useParams} from "react-router-dom"

// function Home(){
//     return(<>
//     <div>Home Dashboard</div>
//     </>)
// }
// export default Home
// export function Details(){
//     return(<>
//     <div>App details</div>
//     </>)
// }
// export function Services(){
//     let {id} = useParams();
//     let queryparams = useLocation();
//     let newdata = new URLSearchParams(queryparams.search)
//     let newd = newdata.get ("posts")
//     let newdp = newdata.get ("category")
//     console.log(newdata)
//     return(<>
//     <div>Roll no: {id}</div>
//     <div>Data no: {newd}</div>
//     <div>Category: {newdp}</div>
//     </>)
// }

// export function Plus(){
//     return(<>
//     <div><h6>Plus service booked ✓</h6></div>
//     </>)
// }
// export function Premium(){
//     return(<>
//     <div><h6>Premium service booked 👍</h6></div></>)
// }


// import { Link, Outlet } from "react-router-dom"

// function Home(){
//     return(<>
//     <div>Home Dashboard</div>
//     </>)
// }
// export default Home
// export function Details(){
//     return(<>
//     <div>App details</div>
//     </>)
// }
// export function Services(){
//     return(<>
//     <div>Choose the services</div>
//     <div>
//     <button><Link to="plus">Plus</Link></button>
//     <button><Link to="premium">Premium</Link></button>
//     </div>
//     <Outlet/>
//     </>)
// }
// export function Plus(){
//     return(<>
//     <div><h6>Plus service booked ✓</h6></div>
//     </>)
// }
// export function Premium(){
//     return(<>
//     <div><h6>Premium service booked 👍</h6></div></>)
// }

// function Home(){
//     return(<>
//     <div>Home Dashboard</div>
//     </>)
// }
// export default Home