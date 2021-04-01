import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const [products,setProducts]=useState([]);
    const [spinner,setSpinner]=useState(false);

    const handleSpinner=()=>{
        const url=`https://banana-cake-96140.herokuapp.com/showProductUi`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setSpinner(true);
        })
    }
    useEffect(()=>{
       handleSpinner();
    },[])
    return (
            <div className="ProductsContainer container">  
                 {
                    spinner && products.map(product=><Product product={product} key={product._id}></Product>)
                }
                
                {!spinner && <div className='spinnerContainer '><Spinner animation="border" variant="secondary"/></div> }
               
            </div>
    );
};

export default Home;