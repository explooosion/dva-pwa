import React from 'react';
import { connect } from 'dva';
import Nav from '@components/Nav';
import style from './index.css';

const SHAPES = ['point', 'square', 'penta', 'circle', 'cross'];

class Hero extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {};
  }

  componentDidMount() {
    const elem = this.shapes;
    const ww = elem.clientWidth;
    const wh = elem.clientHeight;
    const offset = elem.offsetTop;
    const steps = wh / 2;

    function Particle() {
      let y = wh;
      const dir = Math.random() > 0.5 ? -1 : 1;
      const fric = Math.random() * 3 + 1;
      const scale = Math.random() + 0.5;
      const sine = Math.random() * 60;
      const x = ww * Math.random();

      const item = document.createElement('span');
      item.className = `${style.shape} ${SHAPES[SHAPES.length * Math.random() | 0]}`;
      item.style.transform = `translate3d(${x}px,${y}px,0) scale(${scale})`;
      elem.appendChild(item);

      const height = item.clientHeight;
      const target = -1 * height;

      return () => {
        y -= fric;
        const rot = dir * Math.abs(y + height);
        const left = x + Math.sin(y * Math.PI / steps) * sine;
        item.style.transform = `translate3d(${left}px,${y}px,0) scale(${scale}) rotate(${rot}deg)`;
        return (y > target) || item.remove();
      }
    }

    let last = 0;
    let running = 1;
    const particles = [];

    window.onblur = () => {
      running = document.hasFocus();
    };

    window.onfocus = () => {
      running = document.hasFocus();
    };

    function update(ms) {
      let len = particles.length;
      if (running && len < 50 && (ms - last) > 200) {
        last = ms;
        particles.push(Particle());
      }
      while (len--) {
        // eslint-disable-next-line
        particles[len]() || particles.splice(len, 1);
      }
      requestAnimationFrame(update);
    }

    update();
  }

  shouldComponentUpdate() {
    return false;
  }

  setShapes = elem => {
    this.shapes = elem;
  }

  render() {
    const { title } = this.props;
    return (
      <header className={style.hero}>
        <Nav />
        <div className={style.titles}>
          <h1>{title}</h1>
          <h3>Universal Builder</h3>
        </div>
        <div ref={x => this.shapes = x} className={style.shapes} />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.example.title,
  }
}

export default connect(mapStateToProps)(Hero);
