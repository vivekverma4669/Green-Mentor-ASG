import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
import { AuthProvider } from './Authcontext';
import {store} from "../src/Redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <AuthProvider>
    <div className='App'>
    <Nav/>
    <AllRoutes/>
    <Footer/>
    </div>
    </AuthProvider>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
