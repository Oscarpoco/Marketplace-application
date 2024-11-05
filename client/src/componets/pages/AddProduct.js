import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdCancel } from "react-icons/md";
import { addProduct } from '../../redux/actions/dataActions.js';
import { renderLoader, renderAddItem } from '../../redux/actions/userInterFaceActions';
import '../styling/AddItem.css'; 

export default function AddItem() {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageUrls, setImageUrls] = useState(['']); // State to handle multiple image URLs

    const userID = localStorage.getItem('userID'); // Assume userID is stored in local storage

    const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch(renderLoader(true));

        const productData = {
            userID: userID, // Get userID from localStorage or context
            title: productName,
            price: Number(price), // Ensure price is a number
            description: description,
            images: imageUrls.filter(url => url), // Filter out any empty URLs
            quantity: Number(quantity), // Ensure quantity is a number
            date_created: new Date().toISOString(), // Optional, can be omitted
        };

        dispatch(addProduct(productData)); // Dispatch the action to add the product

        // Reset the form after submitting
        setProductName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setImageUrls(['']);
        
        dispatch(renderLoader(false)); // Stop loader
    };;

    return (
        <div className="add-item-container">
            <div className='headphones'>
                <img src='headphones.jpeg' alt='Product 1'/>
            </div>
            <form onSubmit={handleAddProduct} className="add-item-form" encType="multipart/form-data">
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required min={1} />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required min={1} />
                </div>
                <div className="form-group">
                <label>Image URLs (comma-separated)</label>
                    <input
                        type="text"
                        value={imageUrls.join(', ')}
                        onChange={(e) => setImageUrls(e.target.value.split(','))}
                        placeholder="Enter image URLs, separated by commas"
                        required
                    />
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-btn">Add Product</button>
                    <button type="button" className="cancel-btn" onClick={() => dispatch(renderAddItem())}><MdCancel /> Cancel</button>
                </div>
            </form>
        </div>
    );
}
