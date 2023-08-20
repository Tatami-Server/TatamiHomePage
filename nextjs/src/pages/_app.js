import MainLayout from "@layouts/MainLayout";

import '@style/common.css'

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || MainLayout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
