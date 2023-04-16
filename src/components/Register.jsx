import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "./Spinner";

const Register = () => {
  const { user, loading, signInWithGoogle, createUser, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.password2.value;

    if (password !== password2) {
      alert("Password did not match");
      return;
    }

    return createUser(name, email, password)
      .then(() => {
        alert("User successfully logged in");
        form.reset();
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        alert("User successfully logged in");
        navigate("/order");
      })
      .catch((err) => alert(err.message));
  };

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return (
      <div className="hero min-h-screen py-12 bg-base-200">
        <div className="hero-content w-full flex-col">
          <h2 className="text-2xl text-center max-w-md p-4">
            You are already logged in! Please logout first to create another
            account..
          </h2>
          <button onClick={() => logOut()} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero min-h-screen bg-base-200 py-12">
      <div className="hero-content w-full flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                name="fullName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                name="password2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label justify-start gap-x-2 w-fit">
                <input type="checkbox" className="mt-0.5" required />
                <span className="label-text">
                  I accept all{" "}
                  <a href="#" className="text-green-400 hover:!text-green-500">
                    terms & conditions
                  </a>
                </span>
              </label>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-secondary">
                Register
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="flex items-center justify-center gap-x-5">
              <span>Login with</span>
              <img
                onClick={handleSignInWithGoogle}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                className="w-12 h-12 p-2 rounded-full btn"
                alt="google"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
