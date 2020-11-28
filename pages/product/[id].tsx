import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const {id} = query 

  const [avo, setAvo] = useState<TProduct>({})

  useEffect(()=>{
    window.fetch(`../api/avo/${id}`)
    .then(response => response.json())
    .then(({data}) => setAvo(data))
    .catch(err=>console.log(err))
  }, [id])

  
  return (
    <section>
      <h1>{avo.name} <small style={{fontSize:'small'}}> SKU:{avo.sku}</small></h1>
      <p>
        {avo.attributes && avo.attributes.description}
      </p>
    </section>
  )
}

export default ProductPage
