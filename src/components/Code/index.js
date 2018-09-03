import React from 'react';
import style from './index.css';

class Code extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { offset, label, text } = this.props;
    let cls = style.pre;
    if (offset) cls += ` ${style.offset}`;
    return (
      <pre className={cls}>
        {label && <span className={style.comment}># {label}</span>}
        <span className={style.text}>$ {text}</span>
      </pre>
    );
  }
}

export default Code;
