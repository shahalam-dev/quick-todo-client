import axios from "axios";
import useTaskData from "../../hooks/UseTaskData";
import Card from "../Card/Card";

const Task = ({ taskData }) => {
  const { taskListRefetch } = useTaskData();
  const handleUpdateStatus = async () => {
    await axios.get(
      `https://quick-todo-assessment.herokuapp.com/update-status?id=${taskData._id}`
    );
    taskListRefetch();
  };
  return (
    <>
      {taskData?.task_status === "undone" && (
        <Card>
          <div className="flex flex-row items-center">
            {<h4 className="basis-3/4">{taskData?.task}</h4>}
            <button
              className="btn btn-success btn-square basis-1/5 mx-[10px]"
              onClick={handleUpdateStatus}
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Task;
