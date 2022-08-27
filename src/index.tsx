import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import reducer, { initialState } from './ContextApi/reducer';
import {StateProvider} from "./ContextApi/StateProvider"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <Toaster />
      <App />
    </StateProvider>
  </React.StrictMode>
);


