'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/main.css';

const App = () => <h1>Hello</h1>;
console.log('Hello world');
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
