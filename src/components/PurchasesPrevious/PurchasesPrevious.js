import React from 'react';
import './PurchasePrevious.css';
const PurchasesPrevious = (props) => {
    const {name,price,quantity,imageURL,orderTime,weight}=props.order;
    return (
                <div className="cardContainer w-100 bg-success p-4  align-items-center" >
                    <div className='w-100 productImgContainer'><img className="" src={imageURL}  alt="Card image cap"/></div>
                    <div className='w-100'>
                        <h5 className="">Name :{name}</h5>
                        <p className="">Order Time :{orderTime}</p>
                        <p className="">Quantity :{quantity}</p>
                        <p className="">Weight :{weight}</p>
                        <p className="">Price :${price*quantity}</p>
                    </div>
             </div>

    );
};

export default PurchasesPrevious;