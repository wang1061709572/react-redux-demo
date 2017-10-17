/**
 * Created by Administrator on 2017/8/3.
 */
/**
 * Created by Administrator on 2017/7/21.
 */
import React, { Component } from 'react';
import '../css/taskAndcar.css'
import config from '../config/config.js'

var Commonbox = React.createClass({
    getInitialState: function (){
        return {
            str:'1111',
            time:new Date(),
            data:[],
            select:false
        }
    },
    componentDidMount: function(){
    },
    selected: function(x) {
        console.log(x)
        //x.toggle = true
        console.log(this.state.select)
        this.setState({
            select:!this.state.select
        })
        console.log(this.state.select)
        x.toggle = !this.state.select
        console.log(x.toggle)
    },
    render: function(){
        var datalist = this.props.taskCarList.map(function(item){
            var i_label = ''
            if(item.toggle){
                i_label = <i className="selectRight"></i>
            } else {
                i_label = ''
            }
            if(item.carOrTaskType==1){
                return (
                    <div className="item clearFloat" key={item.ordersCID} onClick={this.selected.bind(this,item)}>
                        <div className="clearFloat content">
                            {i_label}
                            <div className="task_area">
                                <ul className="task_area_con">
                                    <li className='srart_area'>
                                        <span className="newtask_area_start"></span>
                                        <span className="task_area_name">{item.startPoint}</span>
                                    </li>
                                    <li className='area_icon_one'></li>
                                    <li className='area_icon_two'></li>
                                    <li className='srart_area'>
                                        <span className="newtask_area_end"></span>
                                        <span className="task_area_name">{item.endPoint}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="task_start_time"><span>7月09日</span>  <span style={{paddingLeft:10+'px'}}>【浙A23421】</span></div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="item border_bottom" key={item.carID} onClick={this.selected.bind(this,item)}>
                        <div className="clearFloat">
                            {i_label}
                            <div>【{item.plateNumber}】| {item.entName}</div>
                        </div>
                    </div>
                )
            }
        }.bind(this))
        return (
            <div>
                {datalist}
            </div>
        )
    }
})

class RepeatDiv extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('232')
        this.props.actions.taskAndCarList()
    }
    render() {
        return (
            <div>
                {this.props.testProps}
                <Commonbox taskCarList={this.props.results.taskCarList}></Commonbox>
            </div>

        );
    }
}

export default RepeatDiv;