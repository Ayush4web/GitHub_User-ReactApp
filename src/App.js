import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { AuthWrapper } from './pages/AuthWrapper'
import { Dashboard } from './pages/Dashboard'
import { Error } from './pages/Error'
import { Login } from './pages/Login'
import { PrivateRoute } from './pages/privateRoute'

  
function App() {
  return (
    <AuthWrapper>

    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*" exact>
          <Error></Error>
        </Route>
      </Switch>
    </Router>
    </AuthWrapper>
  )
}

export default App
