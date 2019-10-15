import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title: "Dark Knight",
    poster: "https://stat.ameba.jp/user_images/20120813/17/kristen-0409/97/06/j/o0692102412132453301.jpg?caw=800"
  },
  {
    title: "Joker",
    poster: "http://wwws.warnerbros.co.jp/jokermovie/img/sp/visual.jpg?id=0"
  },
  {
    title: "Toy Story4",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81o8T-V0daL._SL1500_.jpg"
  },
  {
    title: "Iron Man",
    poster: "https://images-na.ssl-images-amazon.com/images/I/61h3QYQmxeL._SY679_.jpg"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div >
    );
  }
}

export default App;
