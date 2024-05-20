import React, { useState } from 'react';

export default function ProductForm({ onSubmit }) {
  const [productData, setProductData] = useState({
    productTitle: '',
    productPrice: '',
    imageUrl: '',
    productDescription: '',
    categoryId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productData);
    // Clear form data after submission
    setProductData({
      productTitle: '',
      productPrice: '',
      imageUrl: '',
      productDescription: '',
      categoryId: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productTitle">Product Title:</label>
      <input
        type="text"
        id="productTitle"
        name="productTitle"
        value={productData.productTitle}
        onChange={handleChange}
        required
      />

      <label htmlFor="productPrice">Product Price:</label>
      <input
        type="number"
        id="productPrice"
        name="productPrice"
        value={productData.productPrice}
        onChange={handleChange}
        required
      />

      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        value={productData.imageUrl}
        onChange={handleChange}
        required
      />

      <label htmlFor="productDescription">Product Description:</label>
      <textarea
        id="productDescription"
        name="productDescription"
        value={productData.productDescription}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="categoryId">Category ID:</label>
      <input
        type="text"
        id="categoryId"
        name="categoryId"
        value={productData.categoryId}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
