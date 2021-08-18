import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>REACT</div>
          <span className='subtitle'>BUY COURSE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>JAVA</div>
          <span className='subtitle'>BUY COURSE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>JAVASCRIPT</div>
          <span className='subtitle'>BUY COURSE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>PYTHON</div>
          <span className='subtitle'>BUY COURSE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>AWS</div>
          <span className='subtitle'>BUY COURSE</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;