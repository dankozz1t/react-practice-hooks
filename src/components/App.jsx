import React, { useState, useEffect } from 'react';

import { Counter } from './Counter/Counter';
import { ProductList } from './ProductList';
import {
  fetchProducts,
  postProducts,
  deleteProducts,
} from 'services/api-products';
import { Form } from './Form';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    //EIFI
    (async () => {
      try {
        const result = await fetchProducts();
        setProducts(result.filter(el => el.id !== '71'));
      } catch (error) {
        setErrorMessage(error.message);
      }
    })();

    // const fooo = async () => {
    //   try {
    //     const result = await fetchProducts();
    //     setProducts(result.filter(el => el.id !== '71'));
    //   } catch (error) {
    //     setErrorMessage(error.message);
    //   }
    // };

    // fooo();
  }, []);

  const handleSubmit = async newProduct => {
    try {
      const result = await postProducts(newProduct);

      setProducts([result, ...products]);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleDelete = async e => {
    try {
      const result = await deleteProducts(e.target.id);

      setProducts(products.filter(el => el.id !== result.id));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Counter />
      <Counter />

      <Form onSubmit={handleSubmit} />
      {!!errorMessage ? (
        <p>Smth went wrong, try again, please</p>
      ) : (
        <ProductList products={products} onDelete={handleDelete} />
      )}
    </div>
  );
};
