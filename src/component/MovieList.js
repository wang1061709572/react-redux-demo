import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import '../css/Movielist.css'
import NavbarBox from './navbar'

class ListBox extends Component{
    constructor(props){
        super(props);
        this.toMovieDetail = this.toMovieDetail.bind(this)
        this.state = {
            movieid: this.props.movieInfo.id
        }
    }
    toMovieDetail(){
        console.log(this.state.movieid)
        let path = {
            pathname:'/movieDetail',
            state:{movieid:this.state.movieid}
        }
        browserHistory.push(path)
    }
    render(){
        return (
            <div className="item clearFloat" onClick={this.toMovieDetail}>
                <div className="movie-cover"><img src={this.props.movieInfo.img} /></div>
                <div className="movie-content">
                    <div className="movie-name">{this.props.movieInfo.nm} <span className="movie-sc">{this.props.movieInfo.sc}</span></div>
                    <div className="movie-cat">{this.props.movieInfo.cat}</div>
                    <div className="movie-star">{this.props.movieInfo.star}</div>
                    <div className="movie-showInfo">{this.props.movieInfo.showInfo}</div>
                </div>
            </div>
        )
    }
}

const MovieBox = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function(){
        console.log('list')
        this.props.actions.getMovieList()
    },
    render: function () {
        console.log(this.props.results.movieList)
        var movielist = this.props.results.movieList.map(function (item) {
            return (
                <div className="movielist" key={item.id}>
                    <ListBox movieInfo={item} />
                </div>
            )
        }.bind(this))
        return (
            <div>
                <NavbarBox />
                {movielist}
            </div>
        )
    }
})

export default MovieBox;