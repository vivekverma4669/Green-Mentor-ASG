import Pagination from "./Pagination";
import TaskItem from "./TaskItem";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from '../Authcontext';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(3);
  const [totalTasks, setTotalTasks] = useState(0);
  const [filter, setFilter] = useState("");

  const handleDelete = async (taskId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      try {
        setLoading(true);
        const response = await fetch(`https://grumpy-hare-sunbonnet.cyclic.app/task/delete/${taskId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          const updatedTasks = tasks.filter(task => task._id !== taskId);
          setTasks(updatedTasks);
        }
        const notify2 = () => toast("Task Delete Succuesfully ✅");
        notify2();

      }catch (error) {
        console.error('Error deleting task:', error);
        setError('Failed to delete task');
      } finally {
        setLoading(false);
      }
    }
  };
  
 
  const handleToggle = async (taskId, task) => {
    try {
      const updatedTask = {...task, completed: !task.completed };
      const response = await axios.put(`https://grumpy-hare-sunbonnet.cyclic.app/task/update/${taskId}`, updatedTask, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      (() => toast(  "Task update Succuesfully ✅"))();
    
      fetchTasks();
    }
    catch (error) {
      console.error('Error updating task:', error);
    }
    finally {
      setLoading(false);
    }
  };
  

  const fetchTasks = async () => {
    setLoading(true);
    try {
      let url = `https://grumpy-hare-sunbonnet.cyclic.app/task?page=${currentPage}&limit=${tasksPerPage}`;
      
      if (filter) {
        url = `${url}&completed=${filter}`;
      }
  
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setTasks(data.tasks);
        setTotalTasks(data.totalPages * tasksPerPage);
      }
      else {
        setError('Failed to fetch tasks');
      }
    }
    catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to fetch tasks');
    }
      setLoading(false);
  };
  
  useEffect(() => {
    fetchTasks();
  }, [currentPage, tasksPerPage, filter]);

  return (
    <>
      <h1 style={{ textShadow: "2px 2px rgb(77, 196, 30)", marginBottom: '20px' }}>Your <u> Tasks </u></h1>
      <ToastContainer />
      <select value={filter} onChange={(event) => setFilter(event.target.value)} style={{padding :"10px" ,marginLeft :'-65%' , border :"2px solid green", borderRadius:"5px", marginBottom :'10px'}} >
        <option value="">All Tasks</option>
        <option value="true">Completed Tasks</option>
        <option value="false">Pending Tasks</option>
      </select>

      <div className="post container">
        {loading ? (
          <img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif' alt='load' style={{ width: '250px' }} />
        ) : (
          
          tasks.map((task) => (
            <TaskItem
            key={task._id}
            task={task}
            handleDelete={handleDelete}
            handleToggle={handleToggle} 
          />

          ))
        )}
      </div>

       <div style={{display :"flex" , justifyContent:'center' , width:"450px" ,margin:'auto'}}>
      <div style={{display :'flex', margin: "auto" ,width :'220px' , marginTop :'20px' , justifyContent : "space-around" , border :'5px solid green' ,padding :'17px' , borderRadius :'10px'}}>
        Limit per page : 
       <select value={tasksPerPage} onChange={ (event) => {setTasksPerPage(event.target.value)} }>
       <option>3</option>
       <option>9</option>
       <option>15</option>
       </select>
       </div>

      <Pagination
        currentPage={currentPage}
        tasksPerPage={tasksPerPage}
        totalTasks={totalTasks}
        setCurrentPage={setCurrentPage}
        setTasksPerPage={setTasksPerPage}
      />
     </div>
     
    </>
  );
}

export default TaskList;
