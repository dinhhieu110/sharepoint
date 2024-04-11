import React from 'react';
import './announcementcard.scss';
// import AnnounceImage from '../../../images/announce1.png';
import Nature2Image from '../../../images/nature2.png';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
function Card() {
  return (
    <div className="card-container">
      <img
        className="thumbnail"
        src={Nature2Image}
        alt="announceImage"
        width={160}
        height={120}
      />
      <div className="announcement-content">
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

          <button className="moreBtn">Human Resource</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
