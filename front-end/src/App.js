import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
import { AuthProvider } from './Authcontext';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <AuthProvider>
  
    <Nav/>
    <AllRoutes/>
    <Footer/>

    </AuthProvider>
    </BrowserRouter>

    </div>
  );
}

export default App;
