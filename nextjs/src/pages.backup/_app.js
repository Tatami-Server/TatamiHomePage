import MainLayout from "@layouts/MainLayout";

function MyApp({ Component, pageProps }) {
    const Layout = Component.layout || MainLayout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
