import '../styles/globals.scss';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//Binding events.
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <ToastContainer />
    </>
  );
}

export default MyApp;
