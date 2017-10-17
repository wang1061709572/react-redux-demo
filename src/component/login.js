/**
 * Created by Administrator on 2017/8/3.
 */
/**
 * Created by Administrator on 2017/7/26.
 */
import React,{Component} from 'react'
import '../css/login.css'

class DivBox extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>{this.props.loginData.guid}</div>
        )
    }

}
export default class Login extends Component{
    constructor (props) {
        super(props)
        this.state = {
            fromData:{
                username:'',
                password:''
            }
        }
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
    }
    setUsername (event) {
        let newObj = Object.assign({},this.state.fromData,{username: event.target.value})
        this.setState({fromData:newObj});
    }
    setPassword (event) {
        let newObj = Object.assign({},this.state.fromData,{password: event.target.value})
        this.setState({fromData:newObj});
    }
    render () {
        return (
            <div className='login_contain'>
                <div className='login_list'>
                    <span className='login_txt'>用户名 </span><input className='login_input' type='text' value={this.state.fromData.username} maxLength='11' onChange={this.setUsername} placeholder='请输入用户名' />
                </div>
                <div>
                    <span className='login_txt'>密&nbsp;&nbsp;&nbsp;码 </span><input className='login_input' type='text' value={this.state.fromData.password} maxLength='11' onChange={this.setPassword} placeholder='请输入密码' />
                </div>
                <div className='btn_contain'>
                    <input type='button' value='登录' className='login_btn' onClick={this.props.actions.loginClick.bind(this,this.state.fromData)} />
                </div>
                <DivBox loginData={this.props.results.loginData}></DivBox>
            </div>
        )
    }
}