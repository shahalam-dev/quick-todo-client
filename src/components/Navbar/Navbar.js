import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.config";
import useFirebase from "../../hooks/useFirebase";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const { handleGoogleSignIn, logOut } = useFirebase();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="tasks" className="mx-3">
                To-Do
              </Link>
              <Link to="completed-task" className="mx-3">
                Completed Task
              </Link>
              <Link to="calender" className="mx-3">
                Calender
              </Link>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Quick to-do
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to="tasks" className="mx-3">
              To-DO
            </Link>
            <Link to="completed-task" className="mx-3">
              Completed Task
            </Link>
            <Link to="calender" className="mx-3">
              Calender
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <button onClick={handleGoogleSignIn} className="btn">
              Sign In
            </button>
          )}
          {user && (
            <button onClick={logOut} className="btn">
              Log Out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
