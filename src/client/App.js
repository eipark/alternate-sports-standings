import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null, standingsRaw: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));

    fetch('https://statsapi.web.nhl.com/api/v1/standings')
      .then(res => res.json())
      .then(standingsRaw => this.setState({ standingsRaw }));
  }

  render() {
    const { username, standings } = this.state;
    //{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
    return (
      <div>
        <h1>Alternate NHL Standings</h1>
      </div>
    );
  }
}
