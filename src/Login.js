import {Link, link} from 'react-router-dom'

function Login() {
    return (
      <div className="container justify-content-center add-section">
        <Link to="/"><i class="fas fa-arrow-left"></i></Link>
      <center>
        <h3>Login now</h3>
        <input placeholder="please enter the email" className="form-control"></input><br></br>
        <input placeholder="please enter the password" className="form-control"></input><br></br>
        <button className="btn btn-success form-control">Login</button>
      </center>
    </div>
    );
  }
  export default Login;