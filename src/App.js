import React, { Component,cloneElement } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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
            <Link className='nav_list' to='homePage'>首页</Link>
            <Link className='nav_list' to='movieList'>电影</Link>
            <Link className='nav_list' to='cinemaList'>影院</Link>
            {ChildrenEle}
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        results:{
            loginData: state.loginData,
            movieList: state.movieList,
            cinemaList: state.cinemaList
        }
    }
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
