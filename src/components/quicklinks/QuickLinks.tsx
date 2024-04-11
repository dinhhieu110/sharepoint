import React from 'react';
import './quickLinks.scss';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
function QuickLinks() {
  return (
    <div className="quicklinks-container">
      <h2 className="quicklink-title" style={{ color: '#444444' }}>
        Quick Links
      </h2>
      <div className="quick-links">
        <div className="box">
          <WaterDropRoundedIcon className="icon" />
          <p className="link-name">Training</p>
        </div>
        <div className="box">
          <LanRoundedIcon className="icon" />
          <p className="link-name">Organization</p>
        </div>
        <div className="box">
          <PlaylistAddCheckRoundedIcon className="icon" />
          <p className="link-name">Task</p>
        </div>
        <div className="box">
          <LanguageOutlinedIcon className="icon" />
          <p className="link-name">Global Sales</p>
        </div>
        <div className="box">
          <CakeOutlinedIcon className="icon" />
          <p className="link-name">Birthday</p>
        </div>
        <div className="box">
          <SpaOutlinedIcon className="icon" />
          <p className="link-name">Health</p>
        </div>
        <div className="box">
          <LanOutlinedIcon className="icon" />
          <p className="link-name">Service Desk</p>
        </div>
        <div className="box">
          <LocalShippingOutlinedIcon className="icon" />
          <p className="link-name">Truck</p>
        </div>{' '}
        <div className="box">
          <LightbulbOutlinedIcon className="icon" />
          <p className="link-name">Idea</p>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
