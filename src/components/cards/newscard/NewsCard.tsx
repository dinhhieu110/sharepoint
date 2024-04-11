import React from 'react';
import './newscard.scss';
// import NewsImage from '../../../images/news.png';
import Nature1Image from '../../../images/nature.png';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
function Card() {
  return (
    <div className="card-container">
      <img
        className="thumbnail"
        src={Nature1Image}
        alt="announceImage"
        width={160}
        height={120}
      />
      <div className="news-content">
        <p className="title">New Learning System Is Live</p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          soluta, blanditiis explicabo qui nisi laboriosam, aspernatur facilis
          amet facere error unde.
        </p>
        <div className="foot">
          <div className="date">
            <CalendarMonthOutlinedIcon
              style={{ marginBottom: '4px', color: '#AAAAAA' }}
            />
            <span className="date-content">10/April/2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
