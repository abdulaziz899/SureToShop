import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css';
const CheckOut = (props) => {
    const {productId}=useParams();
    const  [logInUser,setLogInUser]=useContext(UserContext);
    const history=useHistory();
    const [singleProduct,setSingleProduct]=useState({});

    useEffect(()=>{
        fetch(`https://banana-cake-96140.herokuapp.com/product/${productId}`)
            .then(res=>res.json())
            .then(data=>{ 
                setSingleProduct(data);  
            })
    },[])
    const handleCheckOut=()=>{
        const today = new Date();
        const OrderDate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
        const orderDetail={...logInUser,...singleProduct,orderTime:OrderDate};
        fetch('https://banana-cake-96140.herokuapp.com/ordersPlace',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                console.log(data)
            }
        })
        history.push('/success')
    }
    return (
        <div className='container checkOutContainer'>
            <h2 className='text-center text-secondary py-2'>Check Out Now </h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Prices</th>
                            </tr>
                        </thead>
                    <tbody>
                            <tr>
                            <td> {singleProduct.name} </td>
                            <td>{singleProduct.quantity}</td>
                            <td>${singleProduct.price}</td>
                            </tr>
                            
                    </tbody>
                    <tbody>
                            <tr>
                            <td> Total </td>
                            <td></td>
                            <td>${singleProduct.price*singleProduct.quantity}</td>
                            </tr>
                            
                    </tbody>
            </table>           
        <button onClick={handleCheckOut} >Check  Out</button>
    </div>
    );
};

export default CheckOut;