import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import UserList from './Components/UserList/UserList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Container>
          <Switch>
            <Route path="/user-list">
              <UserList />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter >
    </div >
  );
}

export default App;
