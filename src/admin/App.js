import { Admin, CustomRoutes, Resource, defaultDarkTheme, defaultTheme } from 'react-admin';
import { Route } from 'react-router-dom';

import dataProvider from './providers/firestoreDataProvider';
import authProvider from './providers/firebaseAuthProvider';
import Dashboard from './Dashboard';
import Login from './pages/Login';
import RegisterPage from './pages/Register';
import styles from "@admin/styles/Admin.module.css"
import { CustomLayout } from './layout/CustomLayout';


import PeopleIcon from '@mui/icons-material/People';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';

import { NoticeList, NoticeEdit, NoticeCreate, NoticeShow } from './resources/notice';
import { AdminList } from './resources/admin';
import { EventList, EventEdit, EventCreate, EventShow } from './resources/event';
import { EventTypeList, EventTypeEdit, EventTypeCreate } from './resources/eventType';
import { HistoryCreate, HistoryEdit, HistoryList } from './resources/history';
import TopImageEdit from './pages/TopImageEdit';

const App = () => {
    
    return (
        <div className={styles.admin}>
            <Admin 
                dashboard={Dashboard}
                authProvider={authProvider} 
                loginPage={Login}
                dataProvider={dataProvider} 
                theme={defaultTheme}
                darkTheme={defaultDarkTheme}
                layout={CustomLayout}
                basename='/admin'
            >

                <Resource 
                    name="top"
                    icon={PersonalVideoIcon}
                    options={{
                        label: 'トップ画像',
                        to: '/top/image'
                    }}
                >
                    <Route path="image" element={<TopImageEdit />} />
                </Resource>

                <Resource 
                    name="notice"
                    icon={NotificationsActiveIcon}
                    list={NoticeList}
                    edit={NoticeEdit}
                    create={NoticeCreate}
                    options={{
                        label: 'お知らせ',
                    }}
                />

                <Resource 
                    name="event"
                    icon={CalendarTodayIcon}
                    list={EventList}
                    edit={EventEdit}
                    create={EventCreate}
                    options={{
                        label: 'イベント',
                    }}
                />

                <Resource 
                    name="eventType"
                    icon={InsertInvitationIcon}
                    list={EventTypeList}
                    edit={EventTypeEdit}
                    create={EventTypeCreate}
                    recordRepresentation="title"
                    options={{
                        label: 'イベント種別',
                    }}
                />

                <Resource 
                    name="history"
                    icon={HistoryIcon}
                    list={HistoryList}
                    edit={HistoryEdit}
                    create={HistoryCreate}
                    options={{
                        label: '歴史',
                    }}
                />

                <Resource 
                    name="admin"
                    icon={PeopleIcon}
                    list={AdminList}
                    options={{
                        label: '管理ユーザー',
                    }}
                />

                <CustomRoutes noLayout>
                    <Route path="/register" element={<RegisterPage />} />
                </CustomRoutes>
            </Admin>            
        </div>
    )
};

export default App;
