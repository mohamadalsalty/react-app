import {Link, link} from 'react-router-dom'

function Add() {
  return (
    <div className="container justify-content-center add-section">
      <Link to="/"><i class="fas fa-arrow-left"></i></Link>
        <center>
          <h3>Add your paragraph now</h3>
          <input placeholder="please enter the text" className="form-control"></input><br></br>
          <textarea placeholder="please write your paragraph" className="form-control"></textarea><br></br>
          <button className="btn btn-success form-control">Add now</button>
        </center>
    </div>
  );
}

export default Add;
