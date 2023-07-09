import { Admin, Resource, defaultDarkTheme, Login, CustomRoutes } from 'react-admin';
import dataProvider from './providers/firestoreDataProvider';
import Dashboard from './Dashboard';
import authProvider from './providers/firebaseAuthProvider';
import { NoticeList, NoticeEdit, NoticeCreate, NoticeShow } from './components/notice';
import { AdminList } from './components/admin';

const App = () => {
    
    return (
        <Admin 
            dashboard={Dashboard}
            authProvider={authProvider} 
            loginPage={Login}
            dataProvider={dataProvider} 
            theme={defaultDarkTheme} 
            basename='/admin'
            custom
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
                name="admin"
                list={AdminList}
                options={{
                    label: '承認待ちアカウント',
                }}
            />
        </Admin>            
    )
};

export default App;
