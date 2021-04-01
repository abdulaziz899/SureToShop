import { faEdit, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    return (
             <div className="sideNavContainer w-25 text-danger">
                <h2 className='text-center'>Sure TO shop </h2>
                <ul className=''>
                    <li ><Link className='text-decoration-none' to="/manage">
                    <Button className='mx-3'> <FontAwesomeIcon icon={faTasks} /></Button>Manage Product</Link></li>
                    <li><Link className='text-decoration-none' to="/addProduct"> <Button  className='mx-3' > <FontAwesomeIcon icon={faPlus} /></Button> Add Product </Link></li>
                    <li><Link className='text-decoration-none' to="/manage"> <Button className='mx-3'> <FontAwesomeIcon icon={faEdit} /></Button> Edit Product </Link></li>
                </ul>
            </div>
        
    );
};

export default AdminNavBar;