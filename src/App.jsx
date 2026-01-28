
import { useState } from 'react'
import './index.css'
import { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } from './redux'

function App() {
  const [count, setCount] = useState('')
  const [product, setProduct] = useState('')
  const {data = [], error, isLoading} = useGetGoodsQuery(count)
  
  const [addProduct] = useAddProductMutation()

  const [deleteProduct] = useDeleteProductMutation()

  const handleAddProduct = async() => {
    if (product) {
      await addProduct({name: product}).unwrap()
      setProduct('')
    }
  }

  const handleDeleteProduct = async(id) => {
    await deleteProduct(id).unwrap()
  }

  if (isLoading) return <p>loading...</p>
  if (error) return <p>error</p>

  return (
    <>

      <h1 className='main-title'>Products API</h1>

      <div className='add-product-box'>
        <input className='input' value={product} onChange={(e) => setProduct(e.target.value)} type="text" placeholder='product'/>
        <button className='button' onClick={handleAddProduct}>add product</button>
      </div>

      <h2 className='select-title'>Choose how many products you want to display</h2>

      <select value={count} onChange={(e) => setCount(e.target.value)} name="" id="">
        <option value="''">all</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    
    
      <h3 className='product-title'>Products List: </h3>
      
      <ul className='product-list'>
        {data.map((item, index) => (
          <div className='product-item-box' key={item.id}>
            <li className='product-item' key={item.id}>{index + 1}. {item.name}</li>
            <button onClick={() => handleDeleteProduct(item.id)} className='button button_small'>delete</button>
          </div>
        ))}
      </ul>
      
    </>
  )
}

export default App
