import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
