import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';


createRoot(document.getElementById('root')).render(
   <HashRouter>
    <App2 />
    {/* <App /> */}
  </HashRouter>,
)
