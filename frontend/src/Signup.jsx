import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("..sdf");
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => console.log("registered successfully"))
      .catch((err) => console.log(err));

    console.log("...test");
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  return (
    <div className="d-flex w-100 vh-100 bg-primary justify-content-center align-items-center">
      <div className="bg-white p-3 rounded w-50">
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="form-control rounded-0"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">PassWord</label>
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Sign Up</button>
          <p>You agree to our terms and Policies</p>

          <a
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
