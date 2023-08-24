import React, {useEffect} from 'react'
import { PRODUCTS } from '../../products'
import Product from './product'
import "./shop.css"
import Navbar from '../../components/navbar';

function Shop() {
  useEffect(() => {
    document.getElementById('home').className = "active";
    return () => {
        document.getElementById('home').className = "";
    }
  }, []);

  return (
    <>
      <Navbar/>
      <div className='shop'>
        <div className='shopTitle'>
          <h1>Products</h1>
        </div>
        <div className='products'>
          {PRODUCTS.map((product) => (
            <Product data={product}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Shop
