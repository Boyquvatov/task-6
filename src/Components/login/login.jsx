import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const users = [
    {username: "admin1", password: "123"},
    {username: "admin2", password: "1234"},
    {username: "admin3", password: "12345"}
  ];
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredUsername = event.target.elements.username.value;
    const enteredPassword = event.target.elements.password.value;
    event.target.reset();
    const foundUser = users.find(user => user.username === enteredUsername && user.password === enteredPassword);
    
    if (foundUser) {
      navigate("/cars")
    } else {
      alert("Error: Username or Password incorrect");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card mt-5">
              <div className="card-header">
                <h1>Login</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}> 
                  <input type="text" placeholder="Enter Username" className="form-control my-2" name='username'/>
                  <input type="password" placeholder="Enter Password" className="form-control my-2" name='password'/>
                  <button type="submit" className="btn btn-success">Submit</button> 
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card mt-5">
              <div className="card-header"><h2>Username and Password</h2></div>
              <div className="card-body">
                <h4>Username = admin1 = admin2 = admin3</h4>
                <h4>Password = 123 = 1234 = 12345</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
