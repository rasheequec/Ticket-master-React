
import React from 'react'
import axios from 'axios'
import MyTable from './table'
import TicketForm from './form'
import Search from './search'
import ProgressBar from'./Graphs/progress-bar'
import Piechart from './Graphs/pie-chart'
import Barchart from './Graphs/bar-chart';
import NavBar from './nav-bar'
import {Button, Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom'








class Index extends React.Component{

constructor(props){
    super(props)
    this.state = {
      tabledata: [],
      realData: []
    }
    this.formUpdate = this.formUpdate.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.highHandle = this.highHandle.bind(this)
    this.allHandle = this.allHandle.bind(this)
    this.mediumHandle = this.mediumHandle.bind(this)
    this.lowHandle = this.lowHandle.bind(this)
    this.progressHandle = this.progressHandle.bind(this)
  }
  componentDidMount(){
    
    axios.get('http://localhost:3001/tickets').then(response =>{
        this.setState({
            tabledata: response.data,
            realData: response.data
        })
    })
    
}

handleSearch(code) {
    this.setState(prevState => {
        return {
            tabledata: prevState.tabledata.filter(ticket => ticket.ticket_code.toLowerCase().indexOf(code.toLowerCase()) >= 0)
        }
    })
}
 


formUpdate(data){
    this.setState((prevState)=>{
        return{
            tabledata: prevState.tabledata.concat(data)
        }
    })
}
allHandle(e){
    this.setState({
        tabledata: this.state.realData
    })
}

highHandle(e){
    this.setState(prevState => {
        return{
            tabledata: prevState.realData.filter(ticket => ticket.priority.toLowerCase() == 'high')
        }
    })
}
mediumHandle(e){
    this.setState(prevState => {
        return{
            tabledata: prevState.realData.filter(ticket => ticket.priority.toLowerCase() == 'medium')
        }
    })
}
lowHandle(e){
    this.setState(prevState => {
        return{
            tabledata: prevState.realData.filter(ticket => ticket.priority.toLowerCase() == 'low')
        }
    }) 
}
progressHandle(){
this.setState({
    count: 10
})
   
   


}
  render() {
    return (
     <div>
       {/* <h2>Listing Tickets - {this.state.tabledata.length}</h2> */}
       <NavBar /><br />
       

       <div class="row">
  <div class="col-md-6 ml-5">

  <Row form>
  <Col md ={5}>
        <Search data = {this.state.tabledata} handleSearch = {this.handleSearch}/>
        </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Button color="primary" onClick = {this.allHandle}>All</Button> &nbsp;&nbsp;
        <Button color="primary" onClick = {this.highHandle}>High</Button> &nbsp;&nbsp;
        <Button color="primary" onClick = {this.mediumHandle}>Medium</Button> &nbsp;&nbsp;
        <Button color="primary" onClick = {this.lowHandle}>Low</Button></Row>
        
        
        
        <ProgressBar data = {this.state.tabledata}/>
        <MyTable data = {this.state.tabledata} progress = {this.progressHandle}/>
  </div>
  <div class="col-md-5 ml-5">
  <h3>ADD NEW TICKET</h3>
  <TicketForm data = {this.formUpdate}/>
  <Piechart data = {this.state.tabledata}/>
  <Barchart data = {this.state.tabledata}/>
  </div>
</div>
        
        
        
        
        
     </div>
    );
  }
}
export default Index