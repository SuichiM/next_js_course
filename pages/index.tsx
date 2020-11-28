import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((response) => response.json())
      .then(({ data, lenght }) => setProductList(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      <ul>
        {productList.map((product) => (
          <li>
            <Link href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
