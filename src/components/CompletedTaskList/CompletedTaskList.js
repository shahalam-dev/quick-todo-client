import useTaskData from "../../hooks/UseTaskData";
import CompletedTask from "../CompletedTask/CompletedTask";
import Loading from "../Loading/Loading";

const CompletedTaskList = () => {
  const { taskList, isLoading } = useTaskData();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-8">
      {taskList && (
        <h2 className="text-2xl text-center">Completed tasks list</h2>
      )}
      <div className="divider"></div>
      {taskList &&
        taskList.map((task) => (
          <CompletedTask taskData={task} key={task?._id}></CompletedTask>
        ))}
    </div>
  );
};

export default CompletedTaskList;
