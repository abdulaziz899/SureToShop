import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import PurchasesPrevious from '../PurchasesPrevious/PurchasesPrevious';

const Order = () => {
    const [orders,setOrders]=useState([]);
    const  [logInUser,setLogInUser]=useContext(UserContext);
     useEffect(() => {
       fetch('https://banana-cake-96140.herokuapp.com/purchaseProductDetails?email='+logInUser.email)
       .then(res=>res.json())
       .then(data=>setOrders(data))
    }, [])
    return (
        <div className='container  '>
            <h2 className=' py-3  text-success'>Your Previous Purchase Order Details</h2>
            <div className='purchasePdDetail d-sm-block  d-md-flex justify-content-between'>
                <div className='w-100 h-25'>
                        {
                            orders.map(order=><PurchasesPrevious key={order._id} order={order}></PurchasesPrevious>)
                        }
                </div>
                <div className='productCartContainer'>
                    <h2 className='text-center text-success'>Total Buy :{orders.length} </h2>
                </div>
            </div>
        </div>
    );
};

export default Order;