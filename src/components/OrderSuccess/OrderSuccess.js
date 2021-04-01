import React from 'react';
import { useHistory } from 'react-router';

const OrderSuccess = () => {
    const today = new Date();
    const OrderDate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
    const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const history=useHistory();
    const orderDone=()=>{
        history.push('/home')
    }
    return (
        <div className="successContainer">
            <h1>success full your order </h1>
            <div className="date">
                <p>Order Date:{OrderDate}</p>
                <p>Order Release :{("" + day + "/" + month + "/" + year + "")}</p>
            </div>
            <button onClick={orderDone}>Done </button>
        </div>
    );
};

export default OrderSuccess;