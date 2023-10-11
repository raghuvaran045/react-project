import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav"
import Cart from "./Cart"
import { useState } from "react"
import Gc from "./Gc"
let App=()=>{
  let [cart,setCart]=useState([])
  let [gt,setGt]=useState(0)
  let navigate=useNavigate()
  let addcart=(item)=>{
   let x=cart.filter((prod)=>prod.id==item.id)
    if(x.length==0)
    {
    setCart([...cart,{...item,"qty":1,"total":item.price}])
    setGt(gt+item.price)
    }else if(x[0].qty<10){
      setCart(
        cart.map((prod)=>{
          if(prod.id==item.id)
          {
            setGt(gt+item.price)
            return {...prod,"qty":prod.qty+1,"total":prod.total+prod.price}

          }
          else{
            return prod
          }

        })
      )
    }
    navigate("/cart")
  }

  let dec=(index)=>{
    if(cart[index].qty>1)
    {
      cart[index].qty-=1
      setGt(gt-cart[index].price)
      cart[index].total-=cart[index].price
      setCart([...cart])
    }
  }

  let inc=(index)=>{
    if(cart[index].qty<10)
    {
      cart[index].qty+=1
      cart[index].total+=cart[index].price
      setGt(gt+cart[index].price)
      setCart([...cart])
    }
  }
let del=(index)=>{
  setGt(gt-cart[index].total)
  cart.splice(index,1)

  setCart([...cart])
}
  let gobj={"cart":cart,"addcart":addcart,"dec":dec,"inc":inc,"del":del,"gt":gt}

  return(
    <div>
    <Gc.Provider value={gobj}>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </Gc.Provider>
    </div>

  )

}
export default App