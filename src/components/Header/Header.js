import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../images/sure-logo.png'
const Header = () => {
    const [logInUser,setLogInUser]=useContext(UserContext);
    return (
        <>
             <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="#"> <img className="logoControl" src={Logo} alt=""/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navBarsControls" id="navbarNavAltMarkup">
                        <div className="navbar-nav allNavbar ">
                            <p> <Link className="nav-link active navControl" aria-current="page" to="/home">Home</Link></p>
                            <p><Link className="nav-link navControl" to="/order">Order</Link></p>
                            <p><Link className="nav-link navControl" to="/admin">Admin</Link></p>
                            <p> <Link className="nav-link navControl" to="/deals">Deals</Link></p>
                            {
                            logInUser.success?<img src={logInUser.imgUrl} alt=""/>
                            :<p> <Link className="nav-link navControl" to="/login">Login</Link></p>
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;