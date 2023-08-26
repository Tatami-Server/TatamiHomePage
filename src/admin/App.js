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
                    list={EventTypeList}
                    edit={EventTypeEdit}
                    create={EventTypeCreate}
                    recordRepresentation="title"
                    options={{
                        label: 'イベント種別',
                    }}
                />

                <Resource 
                    name="admin"
                    list={AdminList}
                    options={{
                        label: '承認待ちアカウント',
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
