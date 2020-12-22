import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className = 'image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt="Movie Cover" />
        <div
          className='overlay d-flex align-items-center justify-content-center'
        >
          <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
            Movie Details 
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
