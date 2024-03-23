import { useState , useContext} from "react";
import "../styles/addTask.css";
import { AuthContext } from '../Authcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTask() {
  const { token } = useContext(AuthContext);
  const [newTitle, setNewTitle] = useState('');
  const [newDes, setNewDes] = useState('');
  const [newDate, setNewDate] = useState('');
  const [loading,setLoading] =useState(false);



  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try { 
      let res = await fetch(`https://green-mentor-asg.onrender.com/task/create`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        
        body: JSON.stringify({ title: newTitle, content: newDes, due_date: newDate, completed: false }),
      });
      if (res.ok) {
        //  alert('Task scheduled successfully 🎉');
         const notify = () => toast("Task scheduled successfully 🎉");
         notify();
         setNewTitle('');
         setNewDes('');
         setNewDate('');
      }

    }
    catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="add-Task">
      <ToastContainer style={{margin :'auto'}} />
        <form onSubmit={handleSubmit}>
          <h2> Add Task</h2>
          <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Enter Task Title :" required />
          <textarea value={newDes} onChange={e => setNewDes(e.target.value)} placeholder="Task Description :" required></textarea>
          <input type="date" value={newDate} onChange={e => setNewDate(e.target.value)} className="date" required />
          <button type="submit" disabled={loading==true}>ADD TASK  {loading? "🔃":"" }</button> 
        </form>
      </div>
    </>
  );
}

export default AddTask;
