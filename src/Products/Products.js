import React from 'react'
import hoodie from '../assets/hoodie.png'
import './Products.css'

function Products() {
  return (
    <div className='products_container'>
        <div className='product_item'>
            <h5>hometown hoodie classic</h5>
            <img alt="hoodie" src={hoodie} />
            <button>add to cart</button>
        </div>
        <div className='product_item'>
            <img alt="hoodie" src={hoodie} />
        </div>
        <div className='product_item'>
            <img alt="hoodie" src={hoodie} />
        </div>
        <div className='product_item'>
            <img alt="hoodie" src={hoodie} />
        </div>

        <div className='product_item'>
            <img alt="hoodie" src={hoodie} />
        </div>
    </div>
  )
}

export default Products