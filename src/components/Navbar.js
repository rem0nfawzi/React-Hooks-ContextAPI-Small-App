import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'logged in' : 'logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>Add</li>
      </ul>
    </nav>
  );
};

export default Navbar;
