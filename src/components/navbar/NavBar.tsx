import React from 'react';
import './navBar.scss';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Avatar from '../../images/avatar.jpg';
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo-row">
        <AppsIcon style={{ cursor: 'pointer' }} />
        <p>SharePoint</p>
      </div>
      <div className="search-row">
        <button className="searchBtn">
          <SearchIcon />
        </button>
        <input type="text" placeholder="Search in SharePoint" />
      </div>
      <ul className="setting-row">
        <li>
          <NotificationsNoneOutlinedIcon />
        </li>
        <li>
          <SettingsOutlinedIcon />
        </li>
        <li>
          <QuestionMarkIcon />
        </li>
        <li>
          <img src={Avatar} alt="avatar.png" width={28} height={28} />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
