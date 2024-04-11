import React from 'react';
import './news.scss';
import Card from '../cards/newscard/NewsCard';
function News() {
  return (
    <div className="news-container">
      <h2 className="news-title" style={{ color: '#444444' }}>
        News
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

export default News;
