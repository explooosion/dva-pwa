import React from 'react';
import style from './index.css';

class Nav extends React.Component {
  state = {
    stuck: false,
  };

  componentDidMount() {
    addEventListener('scroll', ev => {
      const stuck = window.pageYOffset > 0;
      this.setState({ stuck });
    }, { passive: true });
  }

  shouldComponentUpdate(_, nxt) {
    const now = this.state;
    return now.stuck !== nxt.stuck;
  }

  render() {
    let cls = style.nav;
    if (this.state.stuck) {
      cls += ` ${style.stuck}`;
    }

    return (
      <nav className={cls}>
        <span />
        <ul>
          <li><a href="https://github.com/lukeed/pwa" className={style['link-external']}>GitHub</a></li>
          <li><a href="https://github.com/lukeed/pwa" className={style['link-external']}>Documentation</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
