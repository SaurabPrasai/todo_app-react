import { useState } from "react";
import Tasks from "./Tasks";

export default function Form({tasks,setTasks}) {
  const [taskValue, setTaskValue] = useState("");
  

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskValue!=""){
    setTasks((prevTasks) => [...prevTasks, taskValue]);
    }
    setTaskValue("")
  };

  return (
    <div className="flex flex-col justify-center items-center w-2/4 m-auto">
      <div className="border-solid border-red-300 mt-20">
        <form className="block " onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            id=""
            placeholder="Add a task..."
            className="border-gray-700 border-2 w-96 h-12 p-5 text-xl "
          />
          <button className="border-gray-700 mx-3 text-xl p-2 w-24 border-2 bg-gray-700 text-white">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
