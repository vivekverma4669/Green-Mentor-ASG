import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
import { AuthProvider } from './Authcontext';
function App() {
  return (
   
    <BrowserRouter>
    <AuthProvider>
    <div className='App'>
    <Nav/>
    <AllRoutes/>
    <Footer/>
    </div>
    </AuthProvider>
    </BrowserRouter>

    
  );
}

export default App;
