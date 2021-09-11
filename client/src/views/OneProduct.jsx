import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link, useHistory} from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
// import ProductList from '../components/ProductList';

const OneProduct = (props) => {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  // const deleteHandler = (productId) => {
  //   axios.delete("http://localhost:8000/api/products/" + productId)
  //     .then(res => {
  //       console.log(res);
  //       history.push("/");
  //     })
  //     .catch(err => console.log(err));
  // }

  return(
    <div className="mt-5 d-flex flex-column align-items-center">
      <h4>{product.title}</h4>
      <p className="mb-0">Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p className="d-flex gap-2 justify-content-end">
        <Link to={"/" + product._id + "/edit"} className="btn btn-link">Edit</Link>
        {/* <button className="col-1" onClick={(e) => {deleteHandler(product._id)}} className="btn btn-outline-dark">Delete</button> */}
        <DeleteButton productId={product._id} successCallback={() => history.push("/")} />
      </p>
    </div>
  )
}

export default OneProduct;