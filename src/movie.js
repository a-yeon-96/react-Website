import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './movie.css';

function movie ({title, poster, genres, synopsis}) {
        return (
            <div className="Movie">
                <div className="Movie_Column">
                    <MoviePoster poster={poster} alt={title} />
                </div>
                <div className="Movie_Column">
                    <h1>{title}</h1>
                    <div className="Movie_Genres">
                        {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <p className="Movie_synopsis">
                        <LinesEllipsis 
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />
                    </p>
                </div>
            </div>
        )
}

function MoviePoster({poster, alt}){ // 멍청한 컴포먼트
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}

function MovieGenre({genre}){ // 멍청한 컴포먼트
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}


movie.propTypes = {
    title: PropTypes.string.isRequired,  //isRequired movie는 title이라는 prop을 제공하는 것이 필수로 설정
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}


MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}


MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

// class MoviePoster extends Component { // 똑똑한 컴포먼트

//     static propTypes = {
//         poster: PropTypes.string.isRequired  //isRequired movie는 poster이라는 prop을 제공하는 것이 필수로 설정
//     }

//     render() {
//         return (
//             <img src={this.props.poster} alt="Movie Poster"/>
//         )
//     }
//  }

export default movie;
