import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { GetStaticProps } from 'next'

const PROTOCOL = process.env.PROTOCOL
const URL = process.env.BKND_URL

export const getStaticPaths = async () => {
  const response = await fetch(`${PROTOCOL}${URL}/api/avo`,
  {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
      Accept: "application/json; charset=UTF-8",
    }}
  )
  const { data: productList }: TAPIAvoResponse = await response.json()
  const paths = productList.map(({ id }) => ({ params: { id } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { query } = useRouter()
  const id = params?.id as string

  const response = await fetch(`${PROTOCOL}${URL}/api/avo/${id}`)

  const product: TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
