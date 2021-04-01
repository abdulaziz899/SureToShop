
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import React, { createContext, useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './components/Header/Header';
import CheckOut from './components/CheckOut/CheckOut';
import AdminNavBar from './components/AdminNavBar/AdminNavBar';
import AdminProductAdd from './components/AdminProductAdd/AdminProductAdd';
import DeleteProduct from './components/DeleteProduct/DeleteProduct';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App() {
  const [logInUser,setLogInUser]=useState({});
  return (
    <UserContext.Provider value={[logInUser,setLogInUser]} >
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route exact path='/home'><Home></Home></Route>
          <PrivateRoute path='/admin'><Admin></Admin></PrivateRoute>
          <PrivateRoute path='/order'><Order></Order></PrivateRoute>
          <Route path='/login'><Login></Login></Route>
          <Route path='/deals'><Deals></Deals></Route>
          <Route path='/navbar'><AdminNavBar></AdminNavBar></Route>
          <PrivateRoute path='/product/:productId'><CheckOut></CheckOut></PrivateRoute>
          <Route path='/success'><OrderSuccess></OrderSuccess></Route>
          <Route path='/addProduct'><AdminProductAdd></AdminProductAdd></Route>
          <Route path='/manage'><DeleteProduct></DeleteProduct></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
