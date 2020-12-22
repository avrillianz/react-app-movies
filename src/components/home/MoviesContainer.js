import React, { Component, useState } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';

import Popup from './Popup';

export class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      source: '',
      modal: false
    };
  }

  render() {
    const { movies } = this.props;

    let content = '';
    const mystyle = {
      textAlign: 'center'
    };

    const toggle = (event) => {
      this.setState({
        source: event.target.currentSrc,
        modal: !this.state.modal
      });
    }

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
          <div onClick={toggle}>
          <MovieCard key={index} movie={movie}/>
          </div>
          ))
        : null;
    return (
      <>
        {content}
        <Popup mystyle={mystyle} isOpen={this.state.modal} source={this.state.source} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
