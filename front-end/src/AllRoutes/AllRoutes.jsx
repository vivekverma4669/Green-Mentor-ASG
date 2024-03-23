import React from 'react'
import { Routes , Route} from 'react-router-dom';
import Home from '../Components/Home';
import AddTask from '../Components/AddTask';
import TaskList from '../Components/TaskList';
import Login from '../Components/Login';
import  SignUp from '../Components/SignUP';
import TaskDetail from '../Components/TaskDetail';
import PrivateRoutes from './PrivateRoutes';



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>


        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>} />
        <Route path="/create" element={<PrivateRoutes><AddTask/></PrivateRoutes>} />
        <Route path="/list"element={<PrivateRoutes><TaskList/></PrivateRoutes>} />
        <Route path="/taskDetail/:id" element={<PrivateRoutes><TaskDetail/></PrivateRoutes>} />
        
        <Route path="*" element={<p>There's nothing here: 404!</p>} />

      </Routes>
    </div>
  )
}

export default AllRoutes;
