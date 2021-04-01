import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminNavBar from '../AdminNavBar/AdminNavBar';

const AdminProductAdd = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL,setImageURL]=useState(null);
    const [product,setProduct]=useState({
        name:'',
        imageURL:'',
        price:'',
        quantity:'',
        weight:''
    });

    const onSubmit = data => {
        const eventData={
            name:product.name,
            imageURL:imageURL,
            price:product.price,
            quantity:product.quantity,
            weight:product.weight
        };
        console.log(eventData)
        const url=`https://banana-cake-96140.herokuapp.com/addProductEvents`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(eventData)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
        
    };

const handleChange=e=>{
    console.log(e.target.value);
    const newInfo={...product};
    newInfo[e.target.name]=e.target.value;
    setProduct(newInfo);
}   

    const handleImageUpload=event=>{
        console.log(event.target.files[0]);
        const imagesData=new FormData();
        imagesData.set('key','a07cb5e18d42a1a96ebcf8657be64589');
        imagesData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imagesData)
          .then(function (response) {
            console.log(response.data.data.display_url);
           
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className='adminContainer '>
           <AdminNavBar></AdminNavBar>
            <div className="formControlNow w-75">
                <h2>Admin Pennal</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input onChange={handleChange}  name="name" type="text" placeholder="select product name"/> <br/>
                        <input  onChange={handleChange}  name="price" type="text" placeholder="select your price"/> <br/>
                        <input  onChange={handleChange}  name="weight" type="text" placeholder="select product weight "/> <br/>
                        <input  onChange={handleChange}  name="quantity" type="text"  placeholder="set quantity"/> <br/>
                        <input onChange={handleImageUpload}  type="file"/> <br/>
                        <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminProductAdd;