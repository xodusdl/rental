// import axios from 'axios'
import { useEffect, useState } from 'react'
import { getProducts } from '../api/firebase'

export default function useProducts() {

    const [ allBicycle, setAllBicycle ] = useState ([])
  
    useEffect(()=>{
      // axios.get('/data/products.json').then((res)=>{
      //       setAllBicycle(res.data)
      // })
      getProducts().then((res)=>{
        setAllBicycle(res)
      })
    }, [])
    
  return (
    [allBicycle]
  )
}
