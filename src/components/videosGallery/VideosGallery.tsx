import React from 'react';
import './videosGallery.scss';
// import AnnounceImage from '../../../src/images/announce1.png';
// import NewsImage from '../../../src/images/news.png';
import Nature1Image from '../../../src/images/nature.png';
import Nature2Image from '../../../src/images/nature2.png';
function VideosGallery() {
  return (
    <div className="videoGallery">
      <h2 className="video-title" style={{ color: '#444444' }}>
        Video Gallery
      </h2>
      <div className="videos-container">
        <img src={Nature1Image} alt="thumbnail" />
        <img src={Nature1Image} alt="thumbnail" />
        <img src={Nature2Image} alt="thumbnail" />
        <img src={Nature2Image} alt="thumbnail" />
      </div>
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

export default VideosGallery;
