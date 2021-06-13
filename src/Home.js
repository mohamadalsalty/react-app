import Slidebar from './Slidebar'
import Main from './Main.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Add from './Add'
import Signup from './Signup'
import Login from './Login'
import Users from './Users'



function Home() {
  
  return (
    <div>

    <Router>
      <Slidebar />
      <Switch>
        <Route exact path="/">
          <Main /> 
        </Route>

        <Route exact path="/react-app">
          <Main /> 
        </Route>
        <Route exact path="/react-app/home">
          <Main />
        </Route>

        <Route exact path="/react-app/add">
          <Add /> 
        </Route>


        <Route exact path="/react-app/signup">
          <Signup /> 
        </Route>

        <Route exact path="/react-app/login">
          <Login /> 
        </Route>

        <Route exact path="/react-app/users">
          <Users /> 
        </Route>


      </Switch>
           
    </Router>



    </div>
  );
}

export default Home;
