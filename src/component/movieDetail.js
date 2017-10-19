import React,{Component} from 'react'
import {renderToString,renderToStaticMarkup} from 'react-dom/server'
import '../css/movieDetail.css'

class DetailBox extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            movieid:this.props.location.state.movieid,
        };
    }
    componentDidMount() {
        console.log(this.state.movieid)
        this.props.actions.getMovieDetail(this.state.movieid)
    }
    
    createHtml() {
        return {__html: this.props.results.movieDetail.dra}
    }
    render(){
        return (
            <div className="container">
                <div className="detail-title">
                    <span></span>
                    <nav>{this.props.results.movieDetail.nm}</nav>
                </div>
                <div className="detail-con clearFloat">
                    <div className="detail-img"><img src={this.props.results.movieDetail.img} /></div>
                    <div className="detail-info">
                        <p className="info-name">{this.props.results.movieDetail.nm}</p>
                        <p className="info-sc">点映评分<span>{this.props.results.movieDetail.sc}</span><span className="info-snum">（{this.props.results.movieDetail.snum}）</span></p>
                        <p className="info-wish">{this.props.results.movieDetail.wish}想看</p>
                        <p className="info-cat">{this.props.results.movieDetail.cat}</p>
                        <p className="info-src">{this.props.results.movieDetail.src}/{this.props.results.movieDetail.dur}分钟</p>
                        <p className="info-rt">{this.props.results.movieDetail.rt}</p>
                    </div>
                </div>
                <div className="info-dra" dangerouslySetInnerHTML={this.createHtml()}></div>
            </div>
        )
    }
}

export default DetailBox