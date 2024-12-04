import { animate, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const CountAnimation = ({from ,to}:{from :number,to:number }) => {
  const ref =  useRef<any>()
  const isInview = useInView(ref)
  const [count , setCount ]= useState(from)
  useEffect(()=>{
    const animation = animate(from, to, {
      duration:5,
      ease:"easeInOut",
      onUpdate:(prev:number)=>{
        setCount(Math.floor(prev))
      },
    })
    return ()=> animation.cancel()
  },[isInview])
  return (
    <div ref= {ref}>{count}</div>
  )
}

export default CountAnimation