import Slidebar from './Slidebar'
import Main from './Main.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Add from './Add'
import Signup from './Signup'
import Login from './Login'
function Home() {
  return (
    <div>

    <Router>
      <Slidebar />
      <Switch>
        <Route exact path="/">
          <Main /> 
        </Route>

        <Route exact path="/home">
          <Main /> 
        </Route>

        <Route exact path="/add">
          <Add /> 
        </Route>


        <Route exact path="/signup">
          <Signup /> 
        </Route>

        <Route exact path="/login">
          <Login /> 
        </Route>
      </Switch>
           
    </Router>



    </div>
  );
}

export default Home;
