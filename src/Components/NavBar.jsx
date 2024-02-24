import {Link} from "react-router-dom"
export default function NavBar(){
    return(
        <>
        <div className="nav">
       <Link to='/Home'>Home</Link>
       <Link to='/Contact'>Contact</Link>
       < Link to='/About'>About</Link>
        </div>
        </>
       
    ) 
}