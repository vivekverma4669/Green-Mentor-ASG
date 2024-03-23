import React, { useState, useEffect, useContext ,} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Authcontext';
import { Link } from 'react-router-dom';
import '../styles/TaskDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TaskDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading,setLoading]= useState(false);
  const { token } = useContext(AuthContext);
  const [task, setTask] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    due_date:''
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`https://grumpy-hare-sunbonnet.cyclic.app/task/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTask(response.data[0]);
        setFormData({
          title: response.data[0].title,
          content: response.data[0].content,
          due_date: response.data[0].due_date

        });
      } catch (error) {
        console.error('Error fetching task detail:', error);
      }
    };
    fetchTask();
  }, [id, token]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    
    if (confirmDelete) {
      try {
        const response = await fetch(`https://grumpy-hare-sunbonnet.cyclic.app/task/delete/${task._id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          alert('Task deleted redirected to tast list❕');
          // const notify2 = () => toast("Task Delete Succuesfully ✅");
          // notify2();
          navigate('/list');
          //navigate to home page
        }
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };
  
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      const response = await axios.put(`https://grumpy-hare-sunbonnet.cyclic.app/task/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      // alert("Task update ");
      const notify3= () => toast("Task update done 👍");
      notify3();
    
      // Optionally, you can update the task state here after successful update
    } catch (error) {
      console.error('Error updating task:', error);
    }
    setLoading(false);
  };

  if (!task) {
    return <img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif' alt='loading' style={{ width: '250px' }} />;
  }

  return (
    <div style={{backgroundColor :'whitesmoke'}}>
    <ToastContainer />
      <div style={{ width: '90%', margin: 'auto', borderRadius: '15px', border: '2px solid black', marginTop: '20px' }}>
        <h2>Title: {task.title}</h2>
        <p>{task.content}</p>
        <div align='right'>
          <span>Author: {task.auth_email}</span>
          <a href='#update'><button style={{ margin: '10px' }}>Edit <img src='https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png' style={{ width: "20px" }} /></button></a>
          <button style={{ margin: '10px' }} onClick={handleDelete}>Delete <img src='https://cdn-icons-png.flaticon.com/512/3687/3687412.png' style={{ width: "20px" }} /></button>
        </div>
      </div>



      <div id='update' style={{ }}>
       
        <form onSubmit={handleSubmit} style={{marginTop :"40px" , borderRadius:'4px'}}>
        <h2 style={{ color: 'white' }}>Edit task</h2>
          <div>
            <label>Title:</label>
            <br></br>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div>
            <label>Content:</label>
            <textarea name="content" value={formData.content} onChange={handleChange} required />
          </div>

          <div style={{width : "50%" , margin:'auto', marginBottom :'20px'}}>
            <label>Due Date :</label>
            <input  type="date" name="due_date" value={formData.due_date} onChange={handleChange} required />
          </div>

          <button type="submit" style={{ backgroundColor: 'teal', color: 'whitesmoke' , borderRadius:'10px' }} disabled={loading}>{loading? "Update task 🔃" : "Update task"}</button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;
