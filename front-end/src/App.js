import './App.css';
import TaskListList from './Components/TaskList';
import AddTask from './Components/AddTask';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import AllRoutes from './AllRoutes/AllRoutes';
import { AuthProvider } from './Authcontext';


function App() {
  return (
    <div>
    <BrowserRouter>
    <AuthProvider>
    <div className="App">
    <Nav/>
    <AllRoutes/>

    <Footer/>
    </div>
    </AuthProvider>
    </BrowserRouter>

    </div>
  );
}

export default App;
