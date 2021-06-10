import Main from './Main.js'

function Home() {
  return (
    <div>

      <nav className="navbar navbar-light bg-light shadow">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content ">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">MENU</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <div><a href="#">Home</a></div>
              <div><a href="#">Users</a></div>
              
            </div>

            
            <div>
              <button type="button" className="close-btn" data-bs-dismiss="modal">X</button>
            </div>


          </div>
        </div>
      </div>





      <Main />


    </div>
  );
}

export default Home;
