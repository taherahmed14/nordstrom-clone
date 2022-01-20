import React from 'react'

const Testimg = () => {
  const getProducts = async () => {
    let res = await fetch('http://localhost:4500/products')
    let data = await res.json()
    console.log(data)
  }

  getProducts()
  return <div></div>
}

export default Testimg
