import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [])

  // create a product
  const createProduct = (product) => {
    axios.post("http://localhost:8000/api/products", product)
      .then(res=> {
        setProducts([...products, res.data]);
      })
      .catch(err=>console.log(err))
  }

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product._id !== productId));
  }

  // const addProduct = (productObj) => {
  //   setProducts([...products,productObj]);
  // }

  const initialFormData = {
    title: "",
    price: 0,
    description: ""
  }

  return(
    <div>
      <ProductForm onSubmitProp = {createProduct} initialFormData={initialFormData} buttonText="Create" />
      <hr/>
      {loaded && <ProductList products={products} deleteProduct = {deleteProduct} />}
    </div>
  );
}

export default Main;