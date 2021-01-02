import React, { Component } from 'react';
import './App.css';
import Movie from './movie';


class App extends Component {
// 순서: (1) componentWillMount (2) render (3) componentDidMount
// 업데이트: (1) componentWillReceiveProps (2)shouldComponentUpdate == ture (3) componentWillUpdate
// (4) render (5) componentDidUpdate

state = {}

componentDidMount(){
  this._getMovies();
}


_renderMovies = () => {
  const movies = this.state.movies.map(movie => {
    console.log(movie)
    return <Movie 
    title={movie.title_english} 
    poster={movie.medium_cover_image} 
    key={movie.id} 
    genres={movie.genres}
    synopsis={movie.synopsis}
    />
   })
   return movies
}

_getMovies = async () => { // async 안쓰면 await 작동안함
  const movies = await this._callApi()
  this.setState({ // callApi 작업이 완료되기 전까지는 실행하지 않음
    movies
  })
}

_callApi = () => {
  // fetch = url를 에이젝스로 불러올 수 있음
  return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count') // promise
  .then(response => response.json()) // 위의 작업이 끝나면, then 볼러오기 // 제이슨으로 변환
  .then(json => json.data.movies) //json => return json.data.movies
  .catch(err => console.log(err)) 
  // 위의 작업이 완료되면 뭔가를 해라. 위의 작업이 에러가 있으면 잡아서 나에게 보여줘
}

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
      // 찾고 있는 데이터가 있는지 체크하고, ? = 자바스크립트에게 물어보는 것
      // 만약 참이라면 영화 정보를 출력하고, 거짓이라면 '로딩중' 텍스트만
    )

  }
}

export default App;
