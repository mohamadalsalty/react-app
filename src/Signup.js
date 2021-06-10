import {Link, link} from 'react-router-dom'

function Signup() {
    return (
    <div className="container justify-content-center add-section">
      <Link to="/"><i class="fas fa-arrow-left"></i></Link>
      <center>
        <h3>Signup now</h3>
        <input placeholder="please enter the email" className="form-control"></input><br></br>
        <input placeholder="please enter the password" className="form-control"></input><br></br>
        <button className="btn btn-success form-control">Signup</button>
      </center>
    </div>
    );
  }
  
  export default Signup;