import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Header from './components/Header/Header.js';
import AuthProvider from './Context/AuthProvider.js';
import Shipping from './components/Shipping/Shipping.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
import PlaceOrder from './components/PlaceOrder/PlaceOrder.js';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>

            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
