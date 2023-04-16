import { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (user) return children;
  else
    return (
      <div className="hero min-h-screen py-12 bg-base-200">
        <h2 className="text-2xl">
          Please{" "}
          <Link to="/login" className="text-green-400">
            login
          </Link>{" "}
          first to visit this page..
        </h2>
      </div>
    );
};

export default PrivateRoutes;
