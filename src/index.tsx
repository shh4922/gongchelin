import ReactDOM, { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { hydrate, render } from 'react-dom';


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  const root = hydrateRoot(rootElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>)
} else {
  const root = createRoot(rootElement)
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

reportWebVitals();
