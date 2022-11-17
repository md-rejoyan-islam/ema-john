import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext';
import './Header.css';

const Header = () => {
    
    const { user, userSignOut } = useContext(AuthContext);
    const handleSignOut = () => {
      userSignOut()
        .then((result) => console.log(result.user))
        .catch((error) => console.log(error));
    };
    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {user?.uid ? (
            <Link onClick={handleSignOut}>Log Out</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">SignUp</Link>
            </>
          )}
          
        </div>
      </nav>
    );
};

export default Header;