import ReactDOM, { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  const root = hydrateRoot(rootElement,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>)
} else {
  const root = createRoot(rootElement)
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

reportWebVitals();
