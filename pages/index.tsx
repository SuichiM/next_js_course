import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

 

export const getServerSideProps = async ()=>{
  // const URL = process.env.BKND_URL
  const URL = process.env.BKND_URL || 'https://avo-suichim-store.vercel.app'
  console.log('main URL:'+URL)
  const response = await fetch(`${URL}/api/avo`)
  
  const {data:productList}:TAPIAvoResponse = await response.json()
  return{
    props:{
      productList
    }
  }
}

const HomePage = ({productList}: {productList:TProduct[]}) => {
  
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
