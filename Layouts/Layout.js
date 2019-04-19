import React from 'react';
import PionerasLogo from '../components/PionerasLogo';
import './Layout.css';

export default ({children}) => (
  <div class="pioneras__layout">
    {children}
    <PionerasLogo />
  </div>
);
