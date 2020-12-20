import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,  //isRequired movie는 title이라는 prop을 제공하는 것이 필수로 설정
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired  //isRequired movie는 poster이라는 prop을 제공하는 것이 필수로 설정
    }

    render() {
        return (
            <img src={this.props.poster} alt="Movie Poster"/>
        )
    }
}
export default movie;
