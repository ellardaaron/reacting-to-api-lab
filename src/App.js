import React, { Component } from 'react'
import 'es6-promise';
import 'isomorphic-fetch';

export class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movieList => {
        this.setState({ movies: movieList })
      })
  }

  render() {
    return (

          <>
          {this.state.movies.map((movie) => (
            <div className="card" key={movie.id}>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
            </div>
          </div>
          ))}
          </>

    )
  }
}

export default App

