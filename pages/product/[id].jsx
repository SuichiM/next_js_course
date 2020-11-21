import React from 'react'
import {useRouter} from 'next/router'

const ProductItem = () =>{
  const {query} = useRouter()
  const {id} = query

  console.log(query)
  
  return (
    <div>
      <h1>Esta es la pagina del producto: {id}</h1>
    </div>
  )
}

export default ProductItem;