import React, {useRef, useEffect} from 'react'
import {mount} from  'cart/CartShow'; 
import {ProductModule} from  'productModule/ProductsIndex'; 

export default function CartContainer() {
    const containerRef = useRef(null)
    const productRef = useRef(null)
    useEffect(()=>{
        if(containerRef && mount) {
            mount(containerRef.current)
        }
        if(productRef && ProductModule) {
          ProductModule(productRef.current)
      }
    },[])
  return (
    <>
    ------------------------------
    <div>This is CartContainer</div>
        <div ref = {containerRef} />
        -------------------------------
        <div>This is product Container</div>
        <div  ref = {productRef}></div>
        ------------------------------
    </>
  )
}
