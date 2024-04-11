import React from 'react';
import './announcement.scss';
import Card from '../cards/announcementcard/AnnouncementCard';
function Announcement() {
  return (
    <div className="announcement-container">
      <h2 className="announcement-title" style={{ color: '#444444' }}>
        Announcement
      </h2>
      <Card />
      <Card />
      <Card />
      <Card />
      <a
        href="##"
        style={{ textDecoration: 'none', fontSize: '14px', color: '#0074BD' }}
      >
        <p>
          View more{' '}
          <span style={{ fontWeight: '700', fontSize: '10px' }}> &gt;&gt;</span>
        </p>
      </a>
    </div>
  );
}

export default Announcement;
