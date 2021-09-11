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

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product._id !== productId));
  }

  const addProduct = (productObj) => {
    setProducts([...products,productObj]);
  }

  return(
    <div>
      <ProductForm addProduct = {addProduct} />
      <hr/>
      {loaded && <ProductList products={products} deleteProduct = {deleteProduct} />}
    </div>
  );
}

export default Main;