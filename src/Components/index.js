
import React from 'react'
import axios from 'axios'
import Table from './table'
import TicketForm from './form'
import Search from './search'
import ProgressBar from'./Graphs/progress-bar'







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
    
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=3e22de10030c7be3').then(response =>{
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
       <h2>Listing Tickets - {this.state.tabledata.length}</h2>
        
        <Search data = {this.state.tabledata} handleSearch = {this.handleSearch}/><br />
        <button onClick = {this.allHandle}>All</button>
        <button onClick = {this.highHandle}>High</button>
        <button onClick = {this.mediumHandle}>Medium</button>
        <button onClick = {this.lowHandle}>Low</button>
        <Table data = {this.state.tabledata} progress = {this.progressHandle}/>
        <ProgressBar data = {this.state.tabledata}/>
        <TicketForm data = {this.formUpdate}/>
     </div>
    );
  }
}
export default Index