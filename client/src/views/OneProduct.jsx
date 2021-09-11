import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const OneProduct = (props) => {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, []);

  return(
    <div className="mt-5 d-flex flex-column align-items-center">
      <h4>{product.title}</h4>
      <p className="mb-0">Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  )
}

export default OneProduct;