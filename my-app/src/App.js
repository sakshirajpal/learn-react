import "./App.css";
// import { render } from '@testing-library/react';
import { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  state = {
    users: [],
    isLoading: false,
    alert: null,
    user: {},
  };

  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=510115bfbfe9a19aa2fd&client_secret=1b2ffda8e0c38489adab57c8f38a6982d0fdb1e3`
    );
    this.setState({ isLoading: false, users: res.data.items });
  };

  getUser = async (username) => {
    this.setState({ isLoading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=510115bfbfe9a19aa2fd&client_secret=1b2ffda8e0c38489adab57c8f38a6982d0fdb1e3`
    );
    this.setState({ isLoading: false, user: res.data });
  };
  /*
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ isLoading: true });
    const res = await axios.get(
      "https://api.github.com/users?client_id=510115bfbfe9a19aa2fd&client_secret=1b2ffda8e0c38489adab57c8f38a6982d0fdb1e3"
    );
    this.setState({ isLoading: false, users: res.data });
  }
  */
  clearUsers = () => {
    this.setState({ users: [], isLoading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      isLoading={this.state.isLoading}
                      users={this.state.users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
