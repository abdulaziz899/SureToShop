
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Delete.css';
import { Button } from 'react-bootstrap';

const Delete = (props) => {
    const {name,price,weight,_id}=props.product;
    const deleteProduct=id=>{
            fetch(`https://banana-cake-96140.herokuapp.com/delete/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>console.log('delete success '))
        
    }

    return (
        <div  className='w-100 py-2 d-flex justify-content-between deleteContainer container'>
                <p>{name}</p>
                <p>{weight}</p>
                <p>${price}</p>
                <p>
                    <Button className="mx-2" ><FontAwesomeIcon icon={faEdit} /></Button>
                    <Button onClick={()=>deleteProduct(_id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                </p>
        </div>
    );
};

export default Delete;