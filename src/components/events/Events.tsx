import React from 'react';
import './events.scss';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
function Events() {
  return (
    <div className="events-container">
      <h2 className="e-title" style={{ color: '#444444' }}>
        Events
      </h2>
      <div className="events">
        <div className="event">
          <div className="d-m">
            <span className="day">01</span>
            <span className="month">Jan</span>
          </div>
          <div className="event-content">
            <span className="event-title">Register Portal</span>
            <div className="timer">
              <AccessTimeOutlinedIcon className="icon" />
              <span className="time">09:00 AM - 09:30 AM</span>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="d-m">
            <span className="day">02</span>
            <span className="month">Jan</span>
          </div>
          <div className="event-content">
            <span className="event-title">IT Maintenance</span>
            <div className="timer">
              <AccessTimeOutlinedIcon className="icon" />
              <span className="time">09:00 AM - 09:30 AM</span>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="d-m">
            <span className="day">03</span>
            <span className="month">Jan</span>
          </div>
          <div className="event-content">
            <span className="event-title">IT Maintenance</span>
            <div className="timer">
              <AccessTimeOutlinedIcon className="icon" />
              <span className="time">09:00 AM - 09:30 AM</span>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="d-m">
            <span className="day">04</span>
            <span className="month">Jan</span>
          </div>
          <div className="event-content">
            <span className="event-title">IT Maintenance</span>
            <div className="timer">
              <AccessTimeOutlinedIcon className="icon" />
              <span className="time">09:00 AM - 09:30 AM</span>
            </div>
          </div>
        </div>
        <a
          href="##"
          style={{ textDecoration: 'none', fontSize: '14px', color: '#0074BD' }}
        >
          <p>
            View more{' '}
            <span style={{ fontWeight: '700', fontSize: '10px' }}>
              {' '}
              &gt;&gt;
            </span>
          </p>
        </a>
      </div>
    </div>
  );
}

export default Events;
