
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/Store.js'; 
import { Toaster } from './components/ui/toaster.jsx';
 


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}> 
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>,
);