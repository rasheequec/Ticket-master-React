import React from 'react'
import { Chart } from "react-google-charts"
class Piechart extends React.Component{
    constructor(props){
        super(props)
    }
   
    highCount(){
        let highFilter = this.props.data.filter(dat =>{
                    return dat.priority.toLowerCase() == "high"
                })
            return Math.floor((highFilter.length/this.props.data.length)*100)

    }

    mediumCount(){
        let mediumFilter = this.props.data.filter(dat=>{
                    return dat.priority.toLowerCase() == "medium"
                })
            return Math.floor((mediumFilter.length/this.props.data.length)*100)
    }

    lowCount(){
        let lowFilter = this.props.data.filter(dat=>{
                    return dat.priority.toLowerCase() == "low"
                })
            return Math.floor((lowFilter.length/this.props.data.length)*100)
    }



    render(){
        return (
            <div>
   <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['High', this.highCount()],
    ['Medium', this.mediumCount()],
    ['Low', this.lowCount()]
  ]}
  options={{
    title: 'Based on priority',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>

            </div>
        )
    }
}
export default Piechart