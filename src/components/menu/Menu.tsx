import React from 'react';
import './menu.scss';
import Icon from '../../images/blueflame.png';
function Menu() {
  return (
    <div className="menu-container">
      <img src={Icon} alt="iconLogo" width={70} height={60} />
      <ul className="menuList">
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li>List</li>
        <li>Support</li>
      </ul>
    </div>
  );
}

export default Menu;
