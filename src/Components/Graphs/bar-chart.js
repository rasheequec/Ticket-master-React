import React from 'react'
import { Chart } from "react-google-charts"

class Barchart extends React.Component {
    constructor(props){
        super(props)
    }
    technicalCount(){
        let technicalFilter = this.props.data.filter(dat =>{
            return dat.department.toLowerCase() == "technical"
        })
        let openCount = technicalFilter.filter(dat =>{
            return dat.status == "open"
        })

        let closeCount = technicalFilter.filter(dat =>{
            return dat.status == "close"
        })
        return [openCount.length, closeCount.length]
    }
    salesCount(){
        let salesFilter = this.props.data.filter(dat =>{
            return dat.department.toLowerCase() == "sales"
        })
        let openCount = salesFilter.filter(dat =>{
            return dat.status == "open"
        })

        let closeCount = salesFilter.filter(dat =>{
            return dat.status == "close"
        })
        return [openCount.length, closeCount.length]

    }
    hrCount(){
        let hrFilter = this.props.data.filter(dat =>{
            return dat.department.toLowerCase() == "hr"
        })
        let openCount = hrFilter.filter(dat =>{
            return dat.status == "open"
        })

        let closeCount = hrFilter.filter(dat =>{
            return dat.status == "close"
        })
        return [openCount.length, closeCount.length]

    }

    render(){
        return(
            <div>
                <Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['City', 'Open', 'Close'],
    ['Technical', this.technicalCount()[0], this.technicalCount()[1]],
    ['Sales', this.salesCount()[0], this.salesCount()[1]],
    ['HR', this.hrCount()[0], this.hrCount()[1]]
  ]}
  options={{
    title: 'Status / Department',
    chartArea: { width: '50%' },
    colors: ['#b0120a', '#ffab91'],
    hAxis: {
      title: 'Total Number',
      minValue: 0,
    },
    vAxis: {
      title: 'Department',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '4' }}
/>
            </div>
        )
    }
}
export default Barchart