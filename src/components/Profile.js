import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import './Profile.css';

export default function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [productFormData, setProductFormData] = useState({
    productTitle: '',
    productPrice: '',
    productDescription: '',
    imageUrl: '',
    categoryId: '',
    images: ''
  });

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("not logged in");
      }
    })
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("logged out");
      toast.success("Successfully logged out");

    } catch (error) {
      console.log(error.message);
    }
  }

  function handleSubmitProduct(formData) {

    const urlPattern = /^https?:\/\/\S+$/;
    if (!urlPattern.test(formData.imageUrl)) {
      toast.error('Invalid image URL');
      return;
    }
  
 
    const categoryId = parseInt(formData.categoryId);
    if (isNaN(categoryId) || categoryId <= 0) {
      toast.error('Invalid category ID');
      return; 
    }
  
    let imagesArray = [];
    if (formData.images && formData.images.trim()) {
      imagesArray = formData.images.trim().split('\n').map(url => url.trim());
      const invalidUrls = imagesArray.some(url => !urlPattern.test(url)); 
      if (invalidUrls) {
        toast.error('Invalid image URL(s)');
        return;
      }
    }
  
    const apiUrl = 'https://api.escuelajs.co/api/v1/products/';
  
    const requestBody = {
      title: formData.productTitle,
      price: parseFloat(formData.productPrice),
      description: formData.productDescription,
      images: imagesArray, 
      categoryId: categoryId,
    };
  
    axios.post(apiUrl, requestBody)
      .then(response => {
        console.log('Product created:', response.data);
        toast.success('Product created successfully');
      })
      .catch(error => {
        console.error('Error creating product:', error.response.data);
        toast.error('Error creating product: ' + error.response.data.message);
      });
  
    setShowProductForm(false);
  }

  function handleProductFormSubmit(e) {
    e.preventDefault();
    handleSubmitProduct(productFormData);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProductFormData({
      ...productFormData,
      [name]: value
    });
  }

  const my ={
    margintop: '10px',
  }

  return (
    <div className='Profile'>
      <Navbar />
      <div className='Profilegg'>
        <h1>Profile</h1>
        <i className="fa-solid fa-address-card fa-8x"></i>
        {userDetails ? (
          <>
            <div>🙏 Welcome {userDetails.firstName} {userDetails.lastName}</div>
            <div><b>First Name: </b>{userDetails.firstName}</div>
            <div><b>Last Name: </b>{userDetails.lastName}</div>
            <div><b>User Type: </b>{userDetails.userType}</div>
            <button onClick={handleLogout}>Logout</button><br/>
            <button onClick={() => setShowProductForm(true)}>Sell a Product</button>
          </>
        ) : (
          <div>Loading...</div>
        )}

        {showProductForm && (
          <form onSubmit={handleProductFormSubmit}>
            <h2>Sell a Product</h2>
            <div>
              <label htmlFor="productTitle">Product Title:</label>
              <input type="text" id="productTitle" name="productTitle" value={productFormData.productTitle} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="productPrice">Product Price:</label>
              <input type="number" id="productPrice" name="productPrice" value={productFormData.productPrice} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="productDescription">Product Description:</label>
              <textarea id="productDescription" name="productDescription" value={productFormData.productDescription} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="imageUrl">Image URL:</label>
              <input type="url" id="imageUrl" name="imageUrl" value={productFormData.imageUrl} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="categoryId">Category ID:</label>
              <input type="text" id="categoryId" name="categoryId" value={productFormData.categoryId} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="images">Additional Image URLs (one per line):</label>
              <textarea id="images" name="images" value={productFormData.images} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
