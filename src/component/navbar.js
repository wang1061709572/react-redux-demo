import React,{Component} from 'react'
import { Link } from 'react-router'
import '../css/navbar.css'

export default class NavbarBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Link className='nav_list' to='homePage'>首页</Link>
                <Link className='nav_list' to='movieList'>电影</Link>
                <Link className='nav_list' to='cinemaList'>影院</Link>
            </div>
        )
    }
}