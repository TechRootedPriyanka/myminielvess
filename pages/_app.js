import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store   from '../redux/store';
import '../styles/globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      </PersistGate>
    </Provider>
  );
}

// export default wrapper.withRedux( MyApp);
export default MyApp;
