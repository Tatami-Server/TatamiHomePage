// ルーティング設定
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Event from './pages/Event';
import Contact from './pages/Contact';
import Helpre from './pages/Helpre';
import History from './pages/History';
import Join from './pages/Join';
import Life from './pages/Life';
import Please from './pages/Please';
import SNS from './pages/SNS';
import Subscription from './pages/Subscription';
import Map from './pages/Map';
import Omikuzi from './pages/Omikuzi';

import AdminApp from '../admin/App'
import RegisterPage from '../admin/pages/Register'

import ScrollToTop from '../util/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// 共通CSSインポート
import '../style/common.css';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/event/`} element={<Event />} />
          <Route path={`/event/:id`} element={<EventDetail />} />
          <Route path={`/contact/`} element={<Contact />} />
          <Route path={`/helpre/`} element={<Helpre />} />
          <Route path={`/history/`} element={<History />} />
          <Route path={`/join/`} element={<Join />} />
          <Route path={`/life/`} element={<Life />} />
          <Route path={`/please/`} element={<Please />}/>
          <Route path={`/sns/`} element={<SNS />} />
          <Route path={`/sbuscription/`} element={<Subscription />}/>
          <Route path={`/map/`} element={<Map />} />
          <Route path={`/omikuzi/`} element={<Omikuzi />} />

          <Route path={`/admin/*`} element={<AdminApp />} />
          <Route path={`/admin/register`} element={<RegisterPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
