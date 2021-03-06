import {Link, link} from 'react-router-dom'



function Main() {
    return(
        <center>
            <h3 className="titlemainpage">Welcome to the dashbaord</h3>
            <div className="container justify-content-center dashboard-items">
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    <div className="col justify-content-center">
                        <Link to="/react-app/add"><i className="fas fa-plus"></i></Link>
                    </div>
                    <div className="col justify-content-center">
                        <Link to="/react-app/signup"><i className="fas fa-user-plus"></i></Link>
                    </div>
                    <div className="col justify-content-center">
                        <Link to="/react-app/login"><i className="fas fa-sign-in-alt"></i></Link>
                    </div>

                    <div className="col justify-content-center">
                        <Link to="/react-app/users"><i className="fas fa-users"></i></Link>
                    </div>
                </div>
            </div>
        </center>
    );
}

export default Main
