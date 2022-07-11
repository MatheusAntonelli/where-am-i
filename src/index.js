import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n'
import Navbar from './component/header/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<Navbar/>}>
        <App />
    </Suspense>

);