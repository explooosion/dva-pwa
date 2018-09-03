import React from 'react';
import items from '@assets/features.json';
import style from './index.css';

class Feats extends React.Component {

  Item(props) {
    return (
      <div key={props.title} className={style.item}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    );
  }

  render() {
    return (
      <div className={style.features}>{items.map(this.Item)}</div>
    );
  }
}

export default Feats;

