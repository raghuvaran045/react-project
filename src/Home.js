import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import './Home.css'
import Gc from "./Gc"
import "./Nav1.css"
import Comp from "./Comp"

let Home=()=>{
    let [data,setData]=useState([])
    let gobj=useContext(Gc)

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then(
            (res)=>{
                console.log(res.data.products)
                setData(res.data.products)
            }
        )
        
    },[])
    
    return(
        <div className="prodcon">
            {
                data.map((item,index)=>{
                    
                    return(
                        <div className="item" key={index}>
                            <div className="imgcon">
                                  <Comp prpimg={item.images} />
                                </div>  
                            <div className="con1">
                            <div className="font">{item.title}</div>
                            <div className="desc">{item.description}</div>
                            <div className="pri"><i class="fa-solid fa-indian-rupee-sign" style={{color:"black"}}></i>&nbsp;{item.price}</div>
                            <div className="rat">{item.rating}</div>
                            <div className="cat">{item.category}</div>
                            <button onClick={()=>gobj.addcart(item)}>Addcart</button>
                        </div>
                            </div>
                    )
                
                   
                    })
            }
        </div>
    )
}
export default Home