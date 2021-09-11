import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useHistory} from "react-router-dom";

const UpdateProduct = (props) => {
  const {id} = useParams();
  const [formData, setFormData] = useState({
    "title": "",
    "price": 0,
    "description": ""
  })

  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => {
        setFormData({
          ...formData,
          ["title"]: res.data.title,
          ["price"]: res.data.price,
          ["description"]: res.data.description,
          ["id"]: res.data._id
        })
      })
  }, [])

  
  const changeHandler = (e) => {
    const {name, value} = e.target;

    // update form information
    setFormData({
      ...formData, // make copy of previous state
      [name]:value // replace the value of the key with new value
    })
  }

  const updateProduct = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/products/" + id, {
      title: formData.title,
      price: formData.price,
      description: formData.description
    })
      .then(res => {
        console.log(res);
        history.push("/product/" + formData.id);
      })
      .catch(err => console.log(err))
  }

  return(
    <div className="container w-25 mt-5">
      <form onSubmit={updateProduct}>
        <p className="d-flex gap-3">
          <label htmlFor="title" className="form-label col-3">Title </label>
          <input className="form-control w-50" type="text" onChange={changeHandler} name="title" value={formData.title}/>
        </p>
        <p className="d-flex gap-3">
          <label htmlFor="price" className="form-label col-3">Price: </label>
          <input className="form-control w-50" type="number" step="0.01" onChange={changeHandler} name="price" value={formData.price}/>
        </p>
        <p className="d-flex gap-3">
          <label htmlFor="description" className="form-label col-3">Description: </label>
          <input className="form-control w-50" type="text" onChange={changeHandler} name="description" value={formData.description}/>
        </p>
        <div>
          <button className="btn btn-dark" type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProduct;