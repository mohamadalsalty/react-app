import {Link, link} from 'react-router-dom'
import users from './backend/users'

function Users() {
    return (

        <div className="container justify-content-center add-section">
            <Link to="/"><i class="fas fa-arrow-left"></i></Link>
                {users.map(user => {
                    return(
                        <div className="text-center">
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                            <br></br>
                        </div>
                    )
                })}
        </div>
    )
}
  
  export default Users;