import { Link } from "react-router-dom";
import "./Nav1.css"
let Nav=()=>{
    return(<>
    <nav>
        <Link to="/"><div className="bag">
            
            </div></Link>
        <Link to="/"><i class="fa-solid fa-house" style={{color:"lightgray"}}></i>&nbsp;Home</Link>
       
        <Link to="/Cart"><i className="fa-solid fa-cart-plus" style={{color:"lightgray"}}></i>&nbsp;Cart</Link>
    </nav>
        <div className="off"> 
        <p></p>
        </div>
    
    </>
    

    )
}
export default Nav;