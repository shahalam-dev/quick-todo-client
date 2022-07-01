import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import useFirebase from "../../hooks/useFirebase";
import Loading from "../Loading/Loading";

const Home = () => {
  const { handleGoogleSignIn } = useFirebase();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const link = "/tasks";

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(link, { replace: true });
  }
  return (
    <>
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-4xl">Welcome Quick to-do</h2>
            <p className="text-2xl">
              Quick to-do is your personal task manager.
            </p>
            <button onClick={handleGoogleSignIn} className="btn my-4">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
