import React from 'react';
import style from './index.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <span>Made with </span>
        <i className={style.heart} />
        <span> by <a href="https://github.com/explooosion">Robby</a></span>
        &nbsp;
        <span> Base on <a href="https://github.com/lukeed">Lukeed</a></span>
      </footer>
    );
  }
}

export default Footer;
