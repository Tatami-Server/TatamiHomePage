// ルーティング設定
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/pages/Home';
import Event from '../views/pages/Event';
import Contact from '../views/pages/Contact';
import Helpre from '../views/pages/Helpre';
import History from '../views/pages/History';
import Join from '../views/pages/Join';
import Life from '../views/pages/Life';
import Please from '../views/pages/Please';
import SNS from '../views/pages/SNS';
import Subscription from '../views/pages/Subscription';
import Map from '../views/pages/Map';
import AdminHome from'../admin/AdminHome';
import AdminChangeLog from '../admin/AdminChangeLog';
import AdminEvent from '../admin/AdminEvent';
import AdminHistory from '../admin/AdminHistory';
import AdminMap from '../admin/AdminMap';
import AdminSpecialThenks from '../admin/AdminSpecialThenks';
import AdminTopPage from '../admin/AdminTopPage';

import ScrollToTop from '../util/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// 共通CSSインポート
import '../style/common.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/event/`} element={<Event />} />
          <Route path={`/contact/`} element={<Contact />} />
          <Route path={`/helpre/`} element={<Helpre />} />
          <Route path={`/history/`} element={<History />} />
          <Route path={`/join/`} element={<Join />} />
          <Route path={`/life/`} element={<Life />} />
          <Route path={`/please/`} element={<Please />}/>
          <Route path={`/sns/`} element={<SNS />} />
          <Route path={`/sbuscription/`} element={<Subscription />}/>
          <Route path={`/map/`} element={<Map />} />
          <Route path={`/adminhome/`} element={<AdminHome/>}/>
          <Route path={`/adminchangelog/`} element={<AdminChangeLog/>}/>
          <Route path={`/adminevent/`} element={<AdminEvent/>}/>
          <Route path={`/adminhistory/`} element={<AdminHistory/>} />
          <Route path={`/adminspecialthenks/`} element={<AdminSpecialThenks/>} />
          <Route path={`/adminmap/`} element={<AdminMap />} />
          <Route path={`/admintoppage/`} element={<AdminTopPage/>} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
