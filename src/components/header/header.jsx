import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';

const Header = () => {


    const {user,logOut}=useContext(AuthContext)

    const handleLogout=()=>{
        logOut()
        .then(result=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <div className='nav-links'>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {user?<span>{user.email}<button onClick={handleLogout}>Logout</button></span>:''}
            </div>
        </nav>
    );
};

export default Header;