import { Provider } from 'react-redux';
import store from 'redux/store';
import 'styles/global.scss'
import 'styles/mixins.scss'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}