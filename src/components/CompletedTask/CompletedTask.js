import axios from "axios";
import useTaskData from "../../hooks/UseTaskData";
import Card from "../Card/Card";

const CompletedTask = ({ taskData }) => {
  const { taskListRefetch } = useTaskData();
  const handleDeleteTask = async () => {
    await axios.get(
      `${process.env.REACT_APP_server_base_url}/delete-task?id=${taskData._id}`
    );
    taskListRefetch();
  };
  return (
    <>
      {taskData?.task_status === "done" && (
        <Card>
          <div className="flex flex-row items-center">
            {<h4 className="basis-3/4 line-through">{taskData?.task}</h4>}
            <button
              className="btn btn-error btn-square basis-1/5 mx-[10px]"
              onClick={handleDeleteTask}
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default CompletedTask;
