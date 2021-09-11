import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const ProductList = (props) => {
  const {deleteProduct} = props;

  const deleteHandler = (productId) => {
    axios.delete("http://localhost:8000/api/products/" + productId)
      .then(res => {
        console.log("Delete API here")
        deleteProduct(productId)
      })
      .catch(err => console.log("Delete API not working", err));
  }

  return(
    <div> 
      <h3>All Products</h3>
      {props.products.map((product,idx) => {
        return (
        <div className="justify-content-center align-items-center d-flex gap-5">
          <p className="mb-0 col-1 text-start" key={idx}><Link to={"/product/" + product._id}>{product.title}</Link></p>
          <button className="col-1" onClick={(e) => {deleteHandler(product._id)}} className="btn btn-link">Delete</button>
        </div>
        )}
        
        // <p>{product._id}: {product.title}</p>
      )}
    </div>
  )
}

export default ProductList;