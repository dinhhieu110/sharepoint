import React from 'react';
import './documentGallery.scss';
import Document from '../cards/documentcard/Document';
function DocumentGallery() {
  return (
    <div className="document-container">
      <h2 className="doc-title" style={{ color: '#444444' }}>
        Document Gallery
      </h2>
      <div className="both-side">
        <div className="left-side">
          <Document />
          <Document />
          <Document />
        </div>
        <div className="right-side">
          <Document />
          <Document />
        </div>
      </div>
    </div>
  );
}

export default DocumentGallery;
