import React from 'react';
import './document.scss';

import Word from '../../../images/word.png';
function Document() {
  return (
    <div className="document-card">
      <p className="doc-title">Policy</p>

      <ul className="doc-list">
        <li className="doc-item">
          <img src={Word} alt="" width={20} height={20} />
          <span>Demo Script</span>
        </li>
        <li className="doc-item">
          <img src={Word} alt="" width={20} height={20} />
          <span>App Introduction</span>
        </li>
        <li className="doc-item">
          <img src={Word} alt="" width={20} height={20} />
          <span>Index</span>
        </li>
        <li className="doc-item">
          <img src={Word} alt="" width={20} height={20} />
          <span>Training</span>
        </li>
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
      </ul>
    </div>
  );
}

export default Document;
