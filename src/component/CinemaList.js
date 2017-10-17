import React,{Component} from 'react'
import '../css/CinemaList.css'

class ListBox extends Component {
    constructor (props){
        super(props)
    }
    render(){
        return(
            <div className="item clearFloat">
                <div>
                    <div className="cinema-name">{this.props.cinemaInfo.nm}<span className="cinema-price">{this.props.cinemaInfo.sellPrice}</span></div>
                    <div>{this.props.cinemaInfo.addr}</div>
                </div>
            </div>
        )
    }
}

const CinemaBox = React.createClass({
    getInitialState(){
        return {}
    },
    componentDidMount(){
        this.props.actions.getCinemaList()
    },
    render(){
        var cinemalist = this.props.results.cinemaList.map(function (item) {
            return (
                <div className="cinemalist" key={item.id}>
                    <ListBox cinemaInfo={item}/>
                </div>
            )
        }.bind(this))
        return(
            <div>
                {cinemalist}
            </div>
        )
    }
})

export default CinemaBox