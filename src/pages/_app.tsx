import { Provider } from 'react-redux';
import store from 'redux/store';
import Layout from '@components/Layout/Layout';
import 'styles/base.css';
import 'styles/global.scss';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
