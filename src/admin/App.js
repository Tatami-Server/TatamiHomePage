import { Admin, CustomRoutes, Resource, defaultDarkTheme, defaultTheme } from 'react-admin';
import dataProvider from './providers/firestoreDataProvider';
import Dashboard from './Dashboard';
import authProvider from './providers/firebaseAuthProvider';
import { NoticeList, NoticeEdit, NoticeCreate, NoticeShow } from './resources/notice';
import { AdminList } from './resources/admin';
import { EventList, EventEdit, EventCreate, EventShow } from './resources/event';
import { EventTypeList, EventTypeEdit, EventTypeCreate } from './resources/eventType';
import Login from './pages/Login';
import styles from "@admin/styles/Admin.module.css"
import RegisterPage from './pages/Register';
import { Route } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import { HistoryCreate, HistoryEdit, HistoryList } from './resources/history';

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
                basename='/admin'
            >
                <Resource 
                    name="notice"
                    icon={NotificationsActiveIcon}
                    list={NoticeList}
                    edit={NoticeEdit}
                    create={NoticeCreate}
                    show={NoticeShow} 
                    options={{
                        label: 'お知らせ',
                    }}
                />

                <Resource 
                    name="event"
                    icon={InsertInvitationIcon}
                    list={EventList}
                    edit={EventEdit}
                    create={EventCreate}
                    show={EventShow} 
                    options={{
                        label: 'イベント',
                    }}
                />

                <Resource 
                    name="eventType"
                    icon={CalendarTodayIcon}
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
