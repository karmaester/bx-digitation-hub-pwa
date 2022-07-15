import { Provider } from 'react-redux';
import store from 'redux/store';
import 'styles/base.css';
import 'styles/global.scss'

export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: JSX.Element) => page)

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
