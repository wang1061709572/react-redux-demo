import React, { Component,cloneElement } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './redux/active.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let ChildrenEle = React.Children.map(this.props.children,
            child => cloneElement(child, {
                actions: this.props.actions,
                results: this.props.results,
                testProps: 'testProps哈哈哈哈'
        })
    )
    return (
        <div className="container">
            {ChildrenEle}
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state)
    const { movieReducer } = state
    console.log(movieReducer)
    let movieList = [],cinemaList = [],movieDetail = {},results = movieReducer['results']
    
    if(results){
        switch (results.type){
            case 'movieList':
                movieList = results.movieList
                break
            case 'cinemaList':
                cinemaList = results.cinemaList
                break
            case 'dataDetail':
                movieDetail = results.movieDetail
                break
            default:
                return {}
        }
    }
    return {
        results:{
            movieList,
            cinemaList,
            movieDetail
        }
    }
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
