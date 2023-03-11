import React from 'react'
import './Products.css'

function Products(productData) {
    let myProductData= productData.productData;

  return (
    <div className='products_container'>
        
        {myProductData.map((item)=>{
            console.log(item.imageLink)
            return(
            <div className='product_item' key={item.itemnum}>
                <img alt={item.itemName} src={item.imageLink} />
                <h3>{item.itemName}</h3>
                <h5>{item.price}</h5>
                <button>view details</button>
                <button>add to cart</button>
            </div>
            )
        })}
    </div>
  )
}

export default Products

