import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(()=>{
    window.fetch('api/avo')
    .then(response => response.json())
    .then(({data, lenght}) => setProductList(data))
    .catch(err=>console.log(err))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map(product => 
        <div>{product.name}</div>  
      )}
    </div>
  )
}

export default HomePage
