import { useState } from "react";
import './SignupForm.css';

const SignupForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    props.saveUser(username, password);
    props.goToLoginbutton();
  };

  return (
    <div className="signup-container screen-container">
      <h2>Signup Form</h2>
      <input type="text" placeholder="Enter your username:" value={username}
        onChange={(e) => setUsername(e.target.value)}/> <br/>
      <input type="password" placeholder="Enter your password:" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignupForm;
