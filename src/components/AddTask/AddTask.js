import axios from "axios";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import useTaskData from "../../hooks/UseTaskData";
import Tasklist from "../Tasklist/Tasklist";

const AddTask = () => {
  const [user] = useAuthState(auth);
  const taskRef = useRef();

  const { taskListRefetch } = useTaskData();

  const handleAddTask = async () => {
    const task = taskRef.current.value;
    const payload = {
      task,
      status: "undone",
    };
    await axios.post(
      `https://quick-todo-assessment.herokuapp.com/add-task?uid=${user.uid}&email=${user.email}`,
      payload
    );
    taskRef.current.value = "";

    taskListRefetch();
  };
  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-xl">Add a task</span>
        </label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Enter Task"
            className="input input-bordered basis-4/5"
            ref={taskRef}
          />
          <button
            className="btn btn-success btn-square basis-1/5 mx-[10px]"
            onClick={handleAddTask}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          </button>
        </div>
      </div>
      <Tasklist />
    </>
  );
};

export default AddTask;
