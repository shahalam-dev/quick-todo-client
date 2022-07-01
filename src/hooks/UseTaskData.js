import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.config";

const useTaskData = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    data: taskList,
    refetch: taskListRefetch,
  } = useQuery(
    "taskData",
    async () =>
      await axios.get(
        `https://quick-todo-assessment.herokuapp.com/tasks-list?uid=${user.uid}&email=${user.email}`
      )
  );

  return {
    isLoading,
    taskList,
    taskListRefetch,
  };
};

export default useTaskData;
