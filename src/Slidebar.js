import {Link, link} from 'react-router-dom'
import $ from 'jquery'; 


function Slidebar() {
  return (
    
    <div className="slidebar-class">
      <nav className="navbar navbar-light bg-light shadow">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>


      <div className="modal fade" id="exampleModal" TabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content ">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">MENU</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <div><Link to="/home"><i className="item_slidebar fas fa-home"></i></Link></div><br></br>
              <div><Link to="/add"><i className="item_slidebar fas fa-plus"></i></Link></div><br></br>
              <div><Link to="/signup"><i className="item_slidebar fas fa-user-plus"></i></Link></div><br></br>
              <div><Link to="/login"><i className="item_slidebar fas fa-sign-in-alt"></i></Link></div><br></br>
              
            </div>

            
            <div>
              <button type="button" className="close-btn" data-bs-dismiss="modal">X</button>
            </div>


          </div>
        </div>
      </div>

    </div>

    
  );
}

$(document).ready(function(){
  $('.item_slidebar').click(function(){
    $('.close-btn').click();
  });
});
export default Slidebar;
