import React from 'react';
import { Progress } from 'reactstrap';
class ProgressBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            percent: ''
        }
    }
    calcPercent(){
        let closed = this.props.data.filter(dat => {
           return dat.status == 'close'
        })
        return Math.floor((closed.length/this.props.data.length)*100)
    }
render(){
    return(
        <div>
            <div className="text-center">{this.state.percent}%</div>
            <h1></h1>
            <Progress value = {this.calcPercent()} color = "success"/>
        </div>
    )
}
}
export default ProgressBar