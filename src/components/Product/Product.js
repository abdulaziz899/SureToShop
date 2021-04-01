import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const {name,imageURL,quantity,price,_id}=props.product;
    const history=useHistory();
    const handleProductBuy=id=>{
        const url=`/product/${id}`;
        history.push(url);
    }
    return (
       <div  className="card productDetails">
           <img src={imageURL} class="card-img-top" alt="image"/>
            <h2 className="card-text">{name}</h2>
            <div className="card-body detailsSection d-flex justify-content-between ">
                <h2 className="card-text text-success">$ <b>{price}</b> </h2>
                    <Button className='bg-success' onClick={()=>handleProductBuy(_id)}  > Buy Now  <FontAwesomeIcon icon={faArrowRight} /></Button> 
            </div>
            
       </div>
       
    );
};

export default Product;