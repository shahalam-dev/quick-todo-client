import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask/AddTask";
import Calender from "./components/Calender/Calender";
import Card from "./components/Card/Card";
import CompletedTaskList from "./components/CompletedTaskList/CompletedTaskList";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import auth from "./firebase.config";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="container">
        <Navbar />
        {user && (
          <h2 className="text-3xl my-8 text-center">
            Hi {user.displayName}! Manage your task with Quick to-do.
          </h2>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tasks"
            element={
              <RequireAuth>
                <Card>
                  <AddTask />
                </Card>
              </RequireAuth>
            }
          />
          <Route
            path="completed-task"
            element={
              <RequireAuth>
                <Card>
                  <CompletedTaskList />
                </Card>
              </RequireAuth>
            }
          />
          <Route
            path="calender"
            element={
              <RequireAuth>
                <Calender />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0 left-0 right-0">
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </>
  );
}

export default App;
