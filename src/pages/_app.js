import MainLayout from "@layouts/MainLayout";
import NoLayout from "@layouts/NoLayout";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@style/common.css'
import '@style/components/Menu.css';

function MyApp({ Component, pageProps, router }) {
    const Layout = router.pathname.includes('admin') ? NoLayout : Component.Layout || MainLayout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
