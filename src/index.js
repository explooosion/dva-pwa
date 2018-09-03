import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#app');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '@components/App';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('app'));
