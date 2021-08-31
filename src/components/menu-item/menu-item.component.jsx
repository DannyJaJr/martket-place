import React from 'react'
import './menu-item.style.scss'


const menuItem = ({title, imageUrl, size}) => (
    <div style={{
      backgroundImage: `url(${imageUrl})`
    }} className= {`${size} menu-item`}
    >
        <div className='content'>
          <div className='title'>{title}</div>
          <span className='subtitle'>Buy Course</span>
        </div>
      </div>
    
);

export default menuItem ;
