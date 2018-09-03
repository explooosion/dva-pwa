import React from 'react';
import VIDEO from '@assets/video.svg';
import style from './index.css';

class Window extends React.Component {
  render() {
    return (
      <div className={style.window_wrap} >
        <div className={style.window}>
          <img src={VIDEO} alt="recording" />
        </div>
      </div>
    );
  }
}

export default Window;


