import useTaskData from "../../hooks/UseTaskData";
import Loading from "../Loading/Loading";
import Task from "../Task/Task";

const Tasklist = () => {
  const { taskList, isLoading } = useTaskData();

  console.log(taskList);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-8">
      {taskList && <h2 className="text-2xl text-center">Tasks list</h2>}
      <div className="divider"></div>
      {taskList &&
        taskList.map((task) => <Task taskData={task} key={task?._id}></Task>)}
    </div>
  );
};

export default Tasklist;
