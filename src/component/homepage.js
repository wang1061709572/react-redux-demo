/**
 * Created by Administrator on 2017/8/3.
 */
import React,{ Component } from 'react'
import { Link,Lifecycle } from 'react-router'
import logo from '../logo.svg'
import '../App.css';
import NavbarBox from './navbar'

export default class homePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    routerWillLeave (nextLocation) {
        console.log('leave Home')
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <NavbarBox></NavbarBox>
            </div>
        )
    }
}