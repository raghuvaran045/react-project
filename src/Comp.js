import { useEffect,useState } from "react";
import "./Comp.css";
let Comp=(props)=>{
    let arr=props.prpimg;
    let [i,setI]=useState(0)
    let fun=()=>{
        setI((i)=>(i+1)%arr.length)
    }
    useEffect(()=>{
        let id=setInterval(fun,1000)
        return()=>clearInterval(id)
    },[])
    return(
        <div className="com"><img src={arr[i]}/>
        </div>
    )}
    export default Comp