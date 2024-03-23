import { useState } from "react";
import { Link } from "react-router-dom";

function TaskItem({ task, handleDelete, handleToggle}) {
 
  return (
    <div className="post-box" key={task._id}>
      <Link to={`/TaskDetail/${task._id}`}>
        <h3 className="post-title">{task.title}</h3>
      </Link>
      <p className="post-description">{task.content}</p>
      <button
        style={{ backgroundColor: task.completed ? "goldenrod" : "crimson" , padding:'8px' , borderRadius :'5px', cursor :'pointer'  }}
       onClick={() => {handleToggle(task._id,task) }}
      >
        {task.completed ? "Task Completed ✅" : " Task onGoing 🔂"}
      </button>
      <div className="post-date" style={{ marginLeft: '10px', margin: '8px' }}><u>Due-Date:</u>  {task.due_date}</div>
      <Link to={`/TaskDetail/${task._id}`}>
        <button style={{ margin: '10px', cursor :'pointer', color :"green" , alignContent :'center' }}>Edit <img src='https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png' style={{ width: "20px" }} /></button>
      </Link>
      <button style={{ margin: '10px' , cursor :'pointer' , color :'red'  }} onClick={() => { handleDelete(task._id) }}>Delete <img src='https://cdn-icons-png.flaticon.com/512/3687/3687412.png' style={{ width: "20px" }} /></button>
    </div>
  );
}
export default TaskItem;

