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

// 共通CSSインポート
import '../style/common.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/event/`} element={<Event />} />
        <Route path={`/contact/`} element={<Contact />} />
        <Route path={`/helpre/`} element={<Helpre />} />
        <Route path={`/history/`} element={<History />} />
        <Route path={`/join/`} element={<Join />} />
        <Route path={`/life/`} element={<Life />} />
        <Route path={`/please/`} element={<Please />} />
        <Route path={`/sns/`} element={<SNS />} />
        <Route path={`/sbuscription/`} element={<Subscription />} />
        <Route path={`/map/`} element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
