import React, { useEffect, useState } from 'react';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import Delete from '../Delete/Delete';

const DeleteProduct = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const url=`https://banana-cake-96140.herokuapp.com/showProductUi`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
    return (
        <div className='adminContainer '>
            <AdminNavBar></AdminNavBar>
            <div className='w-100'>
                <div className='d-flex justify-content-between deleteProductContainer'>
                    <h2>product name</h2>
                    <h2>Weight</h2>
                    <h2>Price</h2>
                    <h2>Action</h2>
                </div>
                 {
                    products.map(product=><Delete  product={product} key={product._id}></Delete>)
                } 
            </div>
        </div>
    );
};

export default DeleteProduct;