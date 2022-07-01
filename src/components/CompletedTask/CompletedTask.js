import Card from "../Card/Card";

const CompletedTask = ({ taskData }) => {
  return (
    <>
      {taskData?.task_status === "done" && (
        <Card>
          <div className="flex flex-row items-center">
            {<h4 className="basis-3/4 line-through">{taskData?.task}</h4>}
          </div>
        </Card>
      )}
    </>
  );
};

export default CompletedTask;
