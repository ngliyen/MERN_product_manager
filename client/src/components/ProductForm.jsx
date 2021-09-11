import React, {useState} from 'react';
// import axios from 'axios';

const ProductForm = (props) => {
  // const {addProduct} = props;

  // const [formData, setFormData] = useState({
  //   "title": "",
  //   "price": 0,
  //   "description": ""
  // })
  // ===== Refactor (Start) =====
  const {initialFormData, onSubmitProp, buttonText} = props;
  const [formData, setFormData] = useState({
    "title": initialFormData.title,
    "price": initialFormData.price,
    "description": initialFormData.description
  })
  // ===== Refactor (End) =====
  const changeHandler = (e) => {
    const {name, value} = e.target;

    // update form information
    setFormData({
      ...formData, // make copy of previous state
      [name]:value // replace the value of the key with new value
    })
  }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:8000/api/products", {
  //     title: formData.title,
  //     price: formData.price,
  //     description: formData.description
  //   })
  //     .then(res=>{
  //       console.log(res.data);
  //       addProduct(res.data);
  //     })
  //     .catch(err=>console.log(err))

  // }

  // ===== Refactor (Start) =====
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmitProp(formData);

  }
    // ===== Refactor (End) =====
  return(
    <div className="container w-50 mt-5">
      <form onSubmit={submitHandler}>
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
          <button className="btn btn-dark" type="submit">{buttonText}</button>
        </div>

      </form>
    </div>
  )
}



export default ProductForm;