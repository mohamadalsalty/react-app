import {Link, link} from 'react-router-dom'



function Main() {
    return(
        <center>
            <div className="container justify-content-center dashboard-items">
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    <div className="col justify-content-center">
                        <Link to="/add"><i className="fas fa-plus"></i></Link>
                    </div>
                    <div className="col justify-content-center">
                        <Link to="/signup"><i className="fas fa-user-plus"></i></Link>
                    </div>
                    <div className="col justify-content-center">
                        <Link to="/login"><i className="fas fa-sign-in-alt"></i></Link>
                    </div>


                </div>
            </div>
        </center>
    );
}

export default Main