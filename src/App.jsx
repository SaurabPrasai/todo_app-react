import Form from "./components/Form"
import Navbar from "./components/Navbar"
import { useState } from "react";
import Tasks from "./components/Tasks";



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count,setCount]=useState(0)

  const handleCheck=(task)=>{

    const remainingTasks=tasks.filter(mappedTask=>task!=mappedTask)

    setTasks(remainingTasks)

    setCount(prevCount=>prevCount+1)
     
  }
  
  const handleDelete=(task)=>{

    const remainingTasks=tasks.filter(mappedTask=>task!=mappedTask)

    setTasks(remainingTasks)

     
  }
  return (
    <>
     <Navbar tasks={tasks} count={count}/>

     <Form tasks={tasks} setTasks={setTasks}/>

       {/* displaying tasks */}
       <div className="mt-10">
        {tasks.length
          ? tasks.map((task,index) => <Tasks key={index} task={task} handleCheck={handleCheck} handleDelete={handleDelete}/> )
          : ""}
      </div>
    </>
  )
}

export default App