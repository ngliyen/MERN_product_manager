import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
        setLoaded(true);
        console.log(loaded);
      })
      .catch(err => console.log(err));
  }, [products])

  return(
    <div>
      {(loaded === true) ?
      <div> 
        <h3>All Products</h3>
        {products.map((product,idx) => 
          <p key={idx}><Link to={`/product/${product._id}`}>{product.title}</Link></p>
          // <p>{product._id}: {product.title}</p>
        )}
      </div>
       : ""}
    </div>
  )
}

export default ProductList;