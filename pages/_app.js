import '../styles/globals.scss';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => {
  console.log('start');
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  console.log('done');
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
