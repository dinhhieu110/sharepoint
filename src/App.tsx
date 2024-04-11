import React from 'react';
import NavBar from './components/navbar/NavBar';
import Menu from './components/menu/Menu';
import './App.scss';
import Announcement from './components/announcement/Announcement';
import News from './components/news/News';
import ImagesGallery from './components/imagesGallery/ImagesGallery';
import VideosGallery from './components/videosGallery/VideosGallery';
import DocumentGallery from './components/documentGallery/DocumentGallery';
import QuickLinks from './components/quicklinks/QuickLinks';
import Events from './components/events/Events';
import HowDoI from './components/howdoI/HowDoI';
function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <div className="wrapper">
          <Menu />
          <div className="right-left">
            <div className="left">
              <Announcement />
              <News />
              <ImagesGallery />
              <VideosGallery />
              <DocumentGallery />
            </div>
            <div className="right">
              <QuickLinks />
              <Events />
              <HowDoI />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
