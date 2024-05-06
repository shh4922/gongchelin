import ReactDOM, { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const rootElement = document.getElementById('root') as HTMLElement

// 카카오맵 SDK 로드 스크립트 생성
// const kakaoMapScript = document.createElement('script');
// kakaoMapScript.async = true;
// kakaoMapScript.type = 'text/javascript';
// kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JSKEY}&libraries=services,clusterer`;

// body 요소에 스크립트 추가
// document.body.appendChild(kakaoMapScript);

// kakaoMapScript.onload = () => {
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
// }


reportWebVitals();
